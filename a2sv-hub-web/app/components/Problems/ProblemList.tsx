"use client"

import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import DataTable from "../Table/Table"
import { columns } from "./Columns"
import { ProblemListProps } from "@/types/Problem"

export default function ProblemList({ problems }: ProblemListProps) {
  return (
    <div className="w-full shadow-md p-7">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-xl text-gray-900">Latest Problems</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>
      <DataTable columns={columns} data={problems} />
    </div>
  )
}
