export interface Submission {
    id: string;
    problemTitle: string;
    userName: string;
    userImage: string;
    timeSpent: string;
    language: string;
    solved: string;
  }
  
export interface SubmissionListProps {
    submissions: Submission[]
  }

