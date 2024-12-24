import { MessageSquare, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" px-4 sticky  w-full py-2 place-items-center mx-auto grid grid-cols-2 gap-2 p-2 justify-center bg-white bottom-0">
      <Link href={'/dashboard'} className="flex flex-col gap-2 items-center text-[14px] hover:cursor-pointer hover:text-mythemes-green">
        <MessageSquare className="w-6 h-6"/>
        <p>Chat</p>
      </Link>

      <Link href={'/dashboard/setting'} className="flex flex-col gap-2 items-center text-[14px] hover:cursor-pointer hover:text-mythemes-green">
        <Settings className="w-6 h-6"/>
        <p>Setting</p>
      </Link>
    </div>
  );
};

export default Navbar;
