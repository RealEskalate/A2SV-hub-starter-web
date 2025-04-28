import { GraphQLClient, gql } from 'graphql-request';
import retry from 'async-retry';

// Type definitions
interface TopicTag {
  name: string;
  slug: string;
}


interface LeetCodeProblem {
  questionId: string;
  title: string;
  titleSlug: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isPaidOnly: boolean;
  topicTags: TopicTag[];
}

interface LeetCodeResponse {
  problemsetQuestionList: {
    total: number;
    questions: LeetCodeProblem[];
  };
}

// GraphQL Client Setup
const client = new GraphQLClient('https://leetcode.com/graphql', {
  headers: {
    'Content-Type': 'application/json',
    ...(process.env.LEETCODE_TOKEN && {
      'Authorization': `Bearer ${process.env.LEETCODE_TOKEN}`
    })
  }
});

// GraphQL Query
const GET_PROBLEMS_QUERY = gql`
  query problemsetQuestionList(
    $categorySlug: String, 
    $limit: Int, 
    $skip: Int, 
    $filters: QuestionListFilterInput
  ) {
    problemsetQuestionList: questionList(
      categorySlug: $categorySlug
      limit: $limit
      skip: $skip
      filters: $filters
    ) {
      total: totalNum
      questions: data {
        questionId: questionFrontendId
        title
        titleSlug
        difficulty
        isPaidOnly: isPaidOnly
        topicTags {
          name
          slug
        }
      }
    }
  }
`;


/**
 * Fetches LeetCode problems with retry logic and error handling
 * @param limit Number of problems to fetch (default: 50)
 * @param skip Number of problems to skip (default: 0)
 * @returns Promise<LeetCodeProblem[]>
 */
export async function getLeetCodeProblems(
  limit = 50, 
  skip = 0
): Promise<LeetCodeProblem[]> {
  try {
    const data = await retry<LeetCodeResponse>(
      async () => {
        return client.request(GET_PROBLEMS_QUERY, {
          categorySlug: '',
          limit,
          skip,
          filters: {}
        });
      },
      {
        retries: 3,
        minTimeout: 2000,
        onRetry: (error) => {
            if (error instanceof Error) {
            console.warn(`Retrying after error: ${error.message}`);
            } else {
            console.warn('Retrying after an unknown error');
            }
        }
      }
    );

    return data.problemsetQuestionList.questions;
  } catch (error) {
    console.error('Failed to fetch LeetCode problems:', error);
    throw new Error('LeetCode API request failed after multiple retries');
  }
}