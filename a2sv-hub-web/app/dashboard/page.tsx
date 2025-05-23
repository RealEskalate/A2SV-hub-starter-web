import { Submission } from "@/types/Submission";
import { getLeetCodeProblems } from "@/lib/leetcodeService";
import WelcomeCard from "./WelcomeCard";
import EventCard from "./EventCard";
import ProgressList from "../components/Progress/ProgressList";
import DailyProblemCard from "./DailyProblemCard";
import ProblemList from "../components/Problems/ProblemList";
import SubmissionList from "../components/LatestSubmission/SubmisionList";

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

const HomePage = async () => {
  const problems = await getLeetCodeProblems();

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
};

export default HomePage;
