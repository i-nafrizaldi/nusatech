import LoginGoogleButton from "@/components/LoginGoogleButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className="h-[932px] px-4 flex flex-col justify-center gap-[48px] items-center ">
      <div className="items-center flex flex-col ">
        <div className="relative w-[105px] h-[105px]">
          <Image
            src={"/Feather.png"}
            alt="img"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-[26px] font-bold text-mythemes-green">
          Were Chatting
        </p>
      </div>
      <div className=" flex flex-col gap-4">
        <p className="text-center text-lg font-bold">
          {" "}
          Selamat datang di Aplikasi <br />
          Were Chatting
        </p>
        <LoginGoogleButton />
      </div>
    </div>
  );
};

export default page;
