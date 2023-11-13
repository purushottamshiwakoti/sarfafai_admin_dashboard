import { Button } from "@/components/ui/button";
import React from "react";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { columns } from "./column";
import { DataTable } from "@/components/ui/data-table";

async function getData() {
  // Fetch data from your API here.
  const res = await fetch("http://localhost:3000/api/location");
  const data = await res.json();
  return data;
}

const page = async () => {
  const data = await getData();
  const { locations } = data;
  return (
    <>
      <Link
        href="/admin/locations/add"
        className="flex justify-end w-[80vw]  items-end mt-3"
      >
        <Button>
          <PlusCircle />
          Add
        </Button>
      </Link>
      <div className="mt-5">
        <DataTable columns={columns} data={locations} />
      </div>
    </>
  );
};

export default page;
