import { Problem } from "@/types/Problem";
import DailyProblemCard from "./components/DailyProblemCard";
import EventCard from "./components/EventCard";
import ProblemList from "./components/Problems/ProblemList";
import ProgressList from "./components/Progress/ProgressList";
import WelcomeCard from "./components/WelcomeCard";
import SubmissionList from "./components/LatestSubmission/SubmisionList";
import { Submission } from "@/types/Submission";

export const submissions: Submission[] = [
  {
    id: "1",
    problemTitle: "Add Two Numbers II",
    userName: "Ali Kibret Muhamed",
    userImage: "https://randomuser.me/api/portraits/men/75.jpg",
    timeSpent: "30",
    language: "Python",
    solved: "1m",
  },
  {
    id: "2",
    problemTitle: "Palindrome Linked List",
    userName: "Samuel Yonas",
    userImage: "https://randomuser.me/api/portraits/men/52.jpg",
    timeSpent: "60",
    language: "Python",
    solved: "4m",
  },
  {
    id: "3",
    problemTitle: "First Unique Character in a String",
    userName: "Omer Elwadia",
    userImage: "https://randomuser.me/api/portraits/men/61.jpg",
    timeSpent: "2",
    language: "Python",
    solved: "8m",
  },
  {
    id: "4",
    problemTitle: "Simplify Path",
    userName: "Feven",
    userImage: "https://randomuser.me/api/portraits/women/45.jpg",
    timeSpent: "40",
    language: "Python",
    solved: "8m",
  },
  {
    id: "5",
    problemTitle: "Shortest Path with Alternating Colors",
    userName: "Uzair",
    userImage: "https://randomuser.me/api/portraits/women/43.jpg",
    timeSpent: "20",
    language: "Python",
    solved: "9m",
  },
  {
    id: "6",
    problemTitle: "Segment with Small Sum",
    userName: "Alfred Darkwa",
    userImage: "https://randomuser.me/api/portraits/men/10.jpg",
    timeSpent: "60",
    language: "Python",
    solved: "17m",
  },
];

const problems: Problem[] = [
  {
    id: "1",
    title: "F - White Collar - Au revoir (goodbye until we meet again.)",
    difficulty: "Hard",
    tag: "Contest",
    addedTime: "12h",
    votes: 0,
  },
  {
    id: "2",
    title: "E - Naruto - Hidden Leaf Story: The Perfect Day for a Wedding",
    difficulty: "Medium",
    tag: "Contest",
    addedTime: "10h",
    votes: 0,
  },
  {
    id: "3",
    title: "D - Impostors - See You Soon, Macaroon",
    difficulty: "Medium",
    tag: "Contest",
    addedTime: "2h",
    votes: 0,
  },
  {
    id: "4",
    title: "C - The big bang theory - The Stockholm Syndrome",
    difficulty: "Medium",
    tag: "Contest",
    addedTime: "1h",
    votes: 0,
  },
  {
    id: "5",
    title: "B - Friends - The Last One",
    difficulty: "Medium",
    tag: "Contest",
    addedTime: "12h",
    votes: 0,
  },
  {
    id: "6",
    title: "A - How i met your mother - Last Forever",
    difficulty: "Easy",
    tag: "Contest",
    addedTime: "12h",
    votes: 0,
  },
];
export default function Home() {
  return (
    <div className="flex flex-col m-9 justify-center gap-6">
      <div className="flex gap-5">
        <WelcomeCard />
        <EventCard />
      </div>
      <ProgressList />
      <DailyProblemCard />
      <ProblemList problems={problems} />
      <SubmissionList submissions={submissions} />
    </div>
  );
}
