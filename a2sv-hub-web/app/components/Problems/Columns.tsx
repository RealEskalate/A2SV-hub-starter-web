"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LeetCodeProblem } from "@/types/Problem";
import { LuArrowBigDown, LuArrowBigUp } from "react-icons/lu";

const difficultyOrder = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
};

export const columns: ColumnDef<LeetCodeProblem>[] = [
  {
    accessorKey: "difficulty",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Difficulty
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const difficulty = row.getValue("difficulty") as
        | "Easy"
        | "Medium"
        | "Hard";

      const difficultyVariant = {
        Easy:
          "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 border-0",
        Medium:
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400 border-0",
        Hard:
          "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400 border-0",
      };

      return (
        <Badge
          className={cn("font-medium px-3 py-1", difficultyVariant[difficulty])}
        >
          {difficulty}
        </Badge>
      );
    },
    sortingFn: (rowA, rowB, columnId) => {
      const valA =
        difficultyOrder[
          rowA.getValue(columnId) as keyof typeof difficultyOrder
        ];
      const valB =
        difficultyOrder[
          rowB.getValue(columnId) as keyof typeof difficultyOrder
        ];
      return valA - valB;
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Problem
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <p
          className="text-sm font-medium"
        >
          {row.getValue("title")}
        </p>
      );
    },
  },
  {
    accessorKey: "topicTags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.getValue("topicTags") as Array<{ name: string }>;
      return (
        <div  className="flex items-center gap-1 overflow-hidden max-w-[150px] scrollbar-hide">
          {tags.map((tag, index) => (
            <span key={tag.name} className="flex items-center">
              <span className="text-xs ">
                {tag.name}
              </span>
              {index < tags.length - 1 && (
                <span className="text-xs text-muted-foreground">,</span>
              )}
            </span>
          ))}
        </div>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const tags = row.getValue(columnId) as Array<{ name: string }>;
      return tags.some((tag) =>
        tag.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    },
  },
  {
    accessorKey: "solved",
    header: "Solved",
    cell: ({ row }) => {
      const solved = row.getValue("solved") as boolean;
      return (
        <div className="flex items-center justify-center">
          {solved ? (
            <span className="text-green-500">✔</span>
          ) : (
            <span>-</span>
          )}
        </div>
      );
    }
  },
  {
    accessorKey: "votes",
    header: "Vote",
    cell: () => {
      const votes = 0;
      return (
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <LuArrowBigUp />
          </Button>
          <span className="text-sm min-w-[1ch] text-center font-bold">{votes}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <LuArrowBigDown />
          </Button>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Link",
    cell: ({ row }) => {
      const problem = row.original;
      return (
        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
          <a
            href={`https://leetcode.com/problems/${problem.titleSlug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      );
    },
  },
];
