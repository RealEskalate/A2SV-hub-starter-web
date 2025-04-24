import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ExternalLink } from "lucide-react"
import { LuArrowBigUp, LuArrowBigDown } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Problem } from "@/types/Problem"

const difficultyOrder = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
}

export const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: "difficulty",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Difficulty <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const difficulty = row.getValue("difficulty") as Problem["difficulty"]

      const difficultyVariant = {
        Easy: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 border-0 font-bold",
        Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400 border-0 font-bold",
        Hard: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400 border-0 font-bold",
      }

      return (
        <Badge variant="outline" className={cn("font-medium px-3 py-1", difficultyVariant[difficulty])}>
          {difficulty}
        </Badge>
      )
    },
    sortingFn: (rowA, rowB, columnId) => {
      const valA = rowA.getValue(columnId) as Problem["difficulty"];
      const valB = rowB.getValue(columnId) as Problem["difficulty"];
      return difficultyOrder[valA] - difficultyOrder[valB];
    }
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
        {row.getValue("title")}
      </a>
    ),
  },
  {
    accessorKey: "tag",
    header: "Tag",
    cell: ({ row }) => <div className="text-sm">{row.getValue("tag")}</div>,
  },
  {
    accessorKey: "addedTime",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Added <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="text-sm text-gray-700">{row.getValue("addedTime")}</div>,
    sortingFn: (rowA, rowB, columnId) => {
      const parseHr = (val: string) => {
        const num = parseFloat(val.replace(/[^\d.]/g, ""))
        return isNaN(num) ? 0 : num
      }
      const valA = parseHr(rowA.getValue(columnId))
      const valB = parseHr(rowB.getValue(columnId))
      return valA - valB
    },
  },
  {
    accessorKey: "votes",
    header: "Vote",
    cell: ({ row }) => {
      const votes = row.getValue("votes") as number
      return (
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-gray-100 dark:hover:bg-gray-800">
            <LuArrowBigUp />
          </Button>
          <span className="text-sm min-w-[1ch] text-center">{votes}</span>
          <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-gray-100 dark:hover:bg-gray-800">
            <LuArrowBigDown />
          </Button>
        </div>
      )
    },
  },
  {
    id: "link",
    header: "Link",
    cell: () => (
      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-800 font-bold">
        <ExternalLink className="h-4 w-4" />
      </Button>
    ),
  },
]
