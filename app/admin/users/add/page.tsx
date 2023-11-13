import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ChevronLeft } from "lucide-react";
import UserForm from "./UserForm";
import prisma from "@/libs/prismadb";

const fetchLocations = async () => {
  const locations = await prisma.location.findMany();
  return locations;
};

const page = async () => {
  const locations = await fetchLocations();
  return (
    <>
      <Link href="/admin/locations" className="flex  mt-3">
        <Button>
          <ChevronLeft />
          Back
        </Button>
      </Link>
      <div className="mt-4">
        <h2 className="text-blue-500 font-bold mb-4">Add Users</h2>
        <UserForm locations={locations} />
      </div>
    </>
  );
};

export default page;
