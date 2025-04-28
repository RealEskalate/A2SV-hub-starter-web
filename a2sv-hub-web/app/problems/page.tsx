import React from "react";
import Link from "next/link";
import { getLeetCodeProblems } from "@/lib/leetcodeService";
import { HiViewColumns } from "react-icons/hi2";
import { IoFilterSharp } from "react-icons/io5";
import { PiExportBold } from "react-icons/pi";
import DataTable from "../components/Table/Table";
import { columns } from "../components/Problems/Columns";

interface ProblemListPageProps {
  searchParams?: { page?: string };
}

const PAGE_SIZE = 10;

const ProblemListPage = async ({ searchParams }: ProblemListPageProps) => {
  const page = parseInt(searchParams?.page || "1", 10);
  const skip = (page - 1) * PAGE_SIZE;

  const problems = await getLeetCodeProblems(PAGE_SIZE, skip);

  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold text-2xl">Problems</p>
      <p className="text-sm text-muted-foreground">Page {page}</p>

      <div className="flex gap-6 rounded bg-gray-100 p-6">
        <div className="flex gap-2">
          <HiViewColumns />
          <p className="font-bold text-sm">Columns</p>
        </div>
        <div className="flex gap-2">
          <IoFilterSharp />
          <p className="font-bold text-sm">Filters</p>
        </div>
        <div className="flex gap-2">
          <PiExportBold />
          <p className="font-bold text-sm">Export</p>
        </div>
      </div>

      <DataTable columns={columns} data={problems} />

      <div className="flex justify-between mt-4">
        <Link
          href={`?page=${page - 1}`}
          className={`px-4 py-2 rounded bg-gray-200 text-sm font-medium ${
            page === 1 ? "pointer-events-none opacity-50" : ""
          }`}
        >
          ← Prev
        </Link>

        <Link
          href={`?page=${page + 1}`}
          className="px-4 py-2 rounded bg-gray-200 text-sm font-medium"
        >
          Next →
        </Link>
      </div>
    </div>
  );
};

export default ProblemListPage;
