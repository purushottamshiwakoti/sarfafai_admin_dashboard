"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const path = usePathname();
  const links = [
    { name: "Home", href: "/admin/dashboard" },
    { name: "Users", href: "/admin/users" },
    { name: "Locations", href: "/admin/locations" },
  ];
  return (
    <div className=" w-[13rem] h-[100vh] p-10 shadow-md space-y-4">
      {links.map((link, index) => (
        <div key={index} className="">
          <Link
            href={link.href}
            className={
              path.includes(link.href) ? "text-blue-500" : "text-black"
            }
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
