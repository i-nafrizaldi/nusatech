"use client";
import { Button } from "@/components/ui/button";
import SettingHeader from "../components/SettingHeader";
import FormEditUser from "../components/FormChangeUsername";
import EditPic from "@/components/EditPic";
import FormChangePassword from "../components/FormChangePassword";
import { ChevronLeft, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const initialValues = {
    password: "",
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
            Password
          </p>
          <div className=" w-[50px] h-[40px]"></div>
        </div>

        <div className="p-4 flex gap-12 justify-star items-center">
          <LockKeyhole className="mx-auto w-[45px] h-[64px]"/>
        </div>
      </div>

      <div className="min-h-[621px] flex flex-col justify-between bg-white p-4">
        <div className=" flex flex-col gap-[16px]">
          <FormChangePassword initialValues={initialValues} />
        </div>
        <Button
          className="h-[50px]  text-gray-500 text-center text-[14px] bg-mythemes-bgWhite"
          variant={"ghost"}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default page;
