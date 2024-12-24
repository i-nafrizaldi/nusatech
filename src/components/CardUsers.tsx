import { getPeople } from "@/app/api/getPeople";
import Image from "next/image";
import React from "react";

const CardUsers = async () => {
  const peoples = await getPeople();

  return (
    <div className="flex flex-col gap-[8px]">
      {peoples.results.map((item, index) => (
        <div
          key={index}
          className="p-4 flex gap-2 h-[72px] justify-between bg-white items-center"
        >
          <div className="flex flex-row gap-[8px]">
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image
                src={item.picture.large}
                alt={`${item.name} Profile Picture`}
                fill
                className="object-cover"
                quality={70}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{item.name.first}</p>
              <p className="font-thin text-xs">{item.email}</p>
            </div>
          </div>

          <div className="flex flex-col text-[10px] gap-1 items-end">
            <p className="font-thin">yesterday</p>
            <div className="w-[17px] h-[17px] rounded-full bg-mythemes-green content-center text-center">
              <p className="text-[8px] text-white">12</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUsers;
