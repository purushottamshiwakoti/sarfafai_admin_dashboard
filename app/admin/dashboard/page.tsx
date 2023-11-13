import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import prisma from "@/libs/prismadb";
import { get } from "http";
import Sidebar from "./components/Sidebar";
import { BarChart4 } from "lucide-react";

const page = async () => {
  const cookieStore = cookies();
  const sarsafai = cookieStore.get("sarsafai");
  if (!sarsafai) {
    redirect("/");
  }

  return (
    <>
      <div className="flex space-x-10">
        <div className="w-40 h-40 shadow-lg flex items-center justify-center">
          <div>
            <p>Total Users</p>
            <div className="flex items-center justify-center space-x-3">
              <BarChart4 />
              <p>40</p>
            </div>
          </div>
        </div>
        <div className="w-40 h-40 shadow-lg flex items-center justify-center">
          <div>
            <p>Total Locations</p>
            <div className="flex items-center justify-center space-x-3">
              <BarChart4 />
              <p>40</p>
            </div>
          </div>
        </div>
        <div className="w-40 h-40 shadow-lg flex items-center justify-center">
          <div>
            <p>Total Officers</p>
            <div className="flex items-center justify-center space-x-3">
              <BarChart4 />
              <p>40</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
