import DashboardHeader from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { ChevronRight, CircleUserRound, LockKeyhole } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-4 flex flex-col gap-[16px] mt-[44px]">
      <DashboardHeader />
      <div className="min-h-[621px] flex flex-col justify-between">
        <div className=" flex flex-col gap-[16px]">
          <Link
            href={"/dashboard/setting/change-username"}
            className="h-[56px] bg-white flex justify-between p-4"
          >
            <div className=" flex gap-2 items-center">
              <CircleUserRound size="24px" />
              <p className="texr-[14px]">Change Username</p>
            </div>
            <div>
              <ChevronRight size="26px" className="text-gray-500" />
            </div>
          </Link>

          <Link
            href={"/dashboard/setting/change-password"}
            className="h-[56px] bg-white flex justify-between p-4"
          >
            <div className=" flex gap-2 items-center">
              <LockKeyhole size="24px" />
              <p className="texr-[14px]">Change Password</p>
            </div>
            <div>
              <ChevronRight size="26px" className="text-gray-500" />
            </div>
          </Link>
        </div>
        <Button
          className="h-[50px] text-mythemes-green text-center text-[14px] bg-white"
          variant={"ghost"}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default page;
