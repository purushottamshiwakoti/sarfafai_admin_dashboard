import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { PlusCircle } from "lucide-react";
import prisma from "@/libs/prismadb";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./column";

async function getData() {
  // Fetch data from your API here.
  const data = await prisma.user.findMany({
    include: {
      location: true,
    },
  });
  return data;
}
const page = async () => {
  const data = await getData();
  return (
    <>
      <Link
        href="/admin/users/add"
        className="flex justify-end w-[80vw]  items-end mt-3"
      >
        <Button>
          <PlusCircle />
          Add
        </Button>
      </Link>
      <div className="mt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default page;
