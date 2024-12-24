"use client";
import FormChangePassword from "@/app/dashboard/setting/components/FormChangePassword";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import FormNewChat from "../components/FormNewChat";

const page = () => {
  const router = useRouter();
  const initialValues = {
    name: "",
  };
  return (
    <div className="px-4 flex flex-col gap-[16px] mt-[44px]">
      <div className="flex flex-col gap-[8px]">
        <div className=" flex gap-2 h-[56px] items-center justify-between ">
          <div
            onClick={() => {
              router.back();
            }}
            className="w-[50px] hover:cursor-pointer h-[40px] border border-gray-400 rounded-lg flex items-center"
          >
            <ChevronLeft className="mx-auto text-mythemes-green" />
          </div>
          <p className=" w-full text-center font-semibold text-[16px]">
            Chatting
          </p>
          <div className=" w-[50px] h-[40px]"></div>
        </div>
      </div>

      <div className="min-h-[698px] flex flex-col justify-between bg-white p-4">
        <div className=" flex flex-col gap-[16px]">
          <p className="font-semibold">Input Username</p>
          <FormNewChat initialValues={initialValues} />
        </div>
        <Button
        onClick={()=>router.push('/chat')}
          className="h-[50px] text-white text-center text-[14px] bg-mythemes-green"
          variant={"default"}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default page;
