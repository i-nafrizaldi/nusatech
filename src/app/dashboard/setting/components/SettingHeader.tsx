"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SettingHeader = () => {
  const router = useRouter();
  return (
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
          Change Username
        </p>
        <div className=" w-[50px] h-[40px]"></div>
      </div>
      <div className="p-4 flex gap-12 justify-start bg-white items-center">
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
            quality={70}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col text-[16px]">
          <p className="font-semibold">Ivan Nafrizaldi</p>
          <p className="font-thin">ivannafrizaldi@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SettingHeader;
