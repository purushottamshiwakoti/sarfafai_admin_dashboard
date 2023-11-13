import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="h-16 bg-blue-500 text-white flex items-center justify-around">
      <h2 className="font-medium text-lg">Sarsafai</h2>
      <div className="flex items-center space-x-3">
        <p className="font-bold">Welcome Admin</p>
        <Avatar>
          <AvatarFallback className="text-black uppercase">A</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
