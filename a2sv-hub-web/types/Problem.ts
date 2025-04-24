export type ProblemDifficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
  id: string;
  title: string;
  difficulty: ProblemDifficulty;
  tag: string;
  addedTime: string;
  votes: number;
}

export interface ProblemListProps {
  problems: Problem[]
}