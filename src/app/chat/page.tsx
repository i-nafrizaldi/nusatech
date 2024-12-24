"use client";
import { ChevronLeft, Ellipsis } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    // HEADER
    <div className="px-4 flex flex-col gap-[16px] mt-[44px]">
      <div className=" flex gap-2 h-[56px] items-center justify-between ">
        <div
          onClick={() => {
            router.back();
          }}
          className="w-[50px] hover:cursor-pointer h-[40px] border border-gray-400 rounded-lg flex items-center"
        >
          <ChevronLeft className="mx-auto text-mythemes-green" />
        </div>

        <div className="flex flex-row w-full px-4 gap-[16px]">
          <div className="w-12 h-12 relative rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`Joko Profile Picture`}
              fill
              className="object-cover"
              quality={70}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-lg">Joko</p>
            <p className="font-thin text-xs">joko@mail.com</p>
          </div>
        </div>
        <div className="w-[50px] hover:cursor-pointer h-[40px] border border-gray-400 rounded-lg flex items-center">
          <Ellipsis className="mx-auto" />
        </div>
      </div>
      {/* Chat area */}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 items-center gap-2">
          <div className=" border h-0"></div>
          <div className="text-[12px] text-center text-gray-500">
            {" "}
            Saturday, Dec 15
          </div>
          <div className=" border h-0"></div>
        </div>

        {/* chat from */}
        <div className="flex flex-col gap-2">
          <div className="text-[14px] font-bold text-mythemes-green">Joko</div>
          <div className="flex flex-col gap-2 max-w-[300px] rounded-r-2xl rounded-tl-2xl bg-white p-4">
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              nihil ipsum soluta veritatis accusamus, libero velit ut magnam
              recusandae totam.
            </p>
            <p className="text-[10px]">01.30</p>
          </div>
        </div>

        {/* you */}
        <div className="flex flex-col gap-2 items-end">
          <div className="text-[14px] font-bold text-mythemes-green">You</div>
          <div className="flex flex-col gap-2  max-w-[300px] rounded-s-2xl rounded-tr-2xl bg-purple-300 p-4">
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              nihil ipsum soluta veritatis accusamus, libero velit ut magnam
              recusandae totam.
            </p>
            <p className="text-[10px] text-right">03.45</p>
          </div>
          <div className="flex flex-col gap-2 max-w-[300px] rounded-s-2xl rounded-tr-2xl bg-mythemes-green text-white p-4">
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              veniam ducimus asperiores voluptatem rem laborum.
            </p>
            <p className="text-[10px] text-right">03.55</p>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-2">
          <div className=" border h-0"></div>
          <div className="text-[12px] text-center text-gray-500">
            {" "}
            Today, Dec 23
          </div>
          <div className=" border h-0"></div>
        </div>

        {/* chat from */}
        <div className="flex flex-col gap-2">
          <div className="text-[14px] font-bold text-mythemes-green">Joko</div>
          <div className="flex flex-col gap-2 max-w-[300px] bg-white rounded-r-2xl rounded-tl-2xl p-4 rounded-e-xl">
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              perspiciatis.
            </p>
            <p className="text-[10px]">04.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
