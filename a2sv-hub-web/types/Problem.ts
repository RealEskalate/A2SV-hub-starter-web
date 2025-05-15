export type ProblemDifficulty = "Easy" | "Medium" | "Hard";

// export type LeetCodeProblem = {
//   questionId: string;
//   title: string;
//   titleSlug: string;
//   difficulty: string;
//   isPaidOnly: boolean;
//   topicTags: { name: string; slug: string }[];
// };
export interface TopicTag {
  name: string;
  slug: string;
}

export interface ProblemListProps {
  problems: LeetCodeProblem[]
}

export interface LeetCodeProblem {
  questionId: string;
  title: string;
  titleSlug: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isPaidOnly: boolean;
  topicTags: TopicTag[];
  solved?: boolean;
  votes?: number;
}

export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}