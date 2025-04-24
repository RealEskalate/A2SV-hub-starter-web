import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Submission } from "@/types/Submission";

export const columns: ColumnDef<Submission>[] = [
  {
    accessorKey: " ",
    header: " ",
    cell: ({ row }) => {
      const image = row.original.userImage;
      return (
        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "userName",
    header: "Name",
    cell: ({ row }) => {
      const name = row.getValue("userName") as string;

      return (
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "problemTitle",
    header: "Problem",
    cell: ({ row }) => (
      <span className="text-sm">{row.getValue("problemTitle")}</span>
    ),
  },
  {
    accessorKey: "timeSpent",
    header: "Time spent",
    cell: ({ row }) => (
      <span className="text-sm">{row.getValue("timeSpent")}</span>
    ),
  },
  {
    accessorKey: "language",
    header: "Language",
    cell: ({ row }) => (
      <span className="text-sm">{row.getValue("language")}</span>
    ),
  },
  {
    accessorKey: "solved",
    header: "Added",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.getValue("solved")}
      </span>
    ),
  },
];
