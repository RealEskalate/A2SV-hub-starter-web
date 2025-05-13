"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Contest {
  id: number;
  title: string;
  problems: number;
  timeAgo: string;
  participated: boolean;
  placement?: number;
  gain?: number;
  codeforcesLink: string;
}

export default function HeldContests() {
  const contests: Contest[] = [
    {
      id: 1,
      title: "A2SV contest#35",
      problems: 5,
      timeAgo: "1m ago",
      participated: true,
      placement: 1,
      gain: 63,
      codeforcesLink: "https://codeforces.com/contest",
    },
    {
      id: 2,
      title: "A2SV contest#34",
      problems: 6,
      timeAgo: "10m ago",
      participated: false,
      codeforcesLink: "https://codeforces.com/contest",
    },
    {
      id: 3,
      title: "A2SV contest#33",
      problems: 7,
      timeAgo: "1h ago",
      participated: true,
      placement: 25,
      gain: -12,
      codeforcesLink: "https://codeforces.com/contest",
    },
    {
      id: 4,
      title: "A2SV contest#32",
      problems: 4,
      timeAgo: "2h ago",
      participated: true,
      placement: 5,
      gain: 45,
      codeforcesLink: "https://codeforces.com/contest",
    },
    {
      id: 5,
      title: "A2SV contest#31",
      problems: 8,
      timeAgo: "5h ago",
      participated: false,
      codeforcesLink: "https://codeforces.com/contest",
    },
    {
      id: 6,
      title: "A2SV contest#30",
      problems: 3,
      timeAgo: "1d ago",
      participated: true,
      placement: 15,
      gain: -8,
      codeforcesLink: "https://codeforces.com/contest",
    },
    {
      id: 7,
      title: "A2SV contest#29",
      problems: 6,
      timeAgo: "2d ago",
      participated: true,
      placement: 3,
      gain: 78,
      codeforcesLink: "https://codeforces.com/contest",
    },
    {
      id: 8,
      title: "A2SV contest#28",
      problems: 5,
      timeAgo: "3d ago",
      participated: false,
      codeforcesLink: "https://codeforces.com/contest",
    },
  ];
  

  const [votes, setVotes] = useState(
    contests.reduce((acc, contest) => {
      acc[contest.id] = 0;
      return acc;
    }, {} as Record<number, number>)
  );

  const handleVote = (id: number, type: "up" | "down") => {
    setVotes((prev) => ({
      ...prev,
      [id]: type === "up" ? prev[id] + 1 : prev[id] - 1,
    }));
  };

  return (
    <div className="flex flex-col gap-4 p-4 mt-10">
      {contests.map((contest) => (
        <div
          key={contest.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
        >
          <div>
            <h2 className="font-bold text-lg">
              {contest.id}. {contest.title}
            </h2>
            <p className="text-gray-500 text-sm">
              {contest.problems} problems · {contest.timeAgo}
            </p>

            <p className="mt-2 text-gray-600">
              {contest.participated &&
              contest.placement !== undefined &&
              contest.gain !== undefined ? (
                <>
                  {contest.placement} place,&nbsp;
                  <span
                    className={
                      contest.gain >= 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {contest.gain >= 0 ? `+${contest.gain}` : `${contest.gain}`}{" "}
                    gain
                  </span>
                </>
              ) : (
                "You didn't participate in this contest"
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => handleVote(contest.id, "up")}>
              <Image src="/upvote.png" alt="Upvote" width={18} height={18} className="cursor-pointer"/>
            </button>
            <span>{votes[contest.id]}</span>
            <button onClick={() => handleVote(contest.id, "down")}>
              <Image
                src="/downvote.png"
                alt="Downvote"
                width={18}
                height={18}
                className="cursor-pointer"
              />
            </button>
            <Link href={contest.codeforcesLink} target="_blank">
              <Image
                src="/contestlink.png"
                alt="Go to Codeforces"
                width={18}
                height={18}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
