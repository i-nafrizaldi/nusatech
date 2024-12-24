"use client";
import { ChevronRight, CirclePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const DashboardHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isPageActive = (path: string) => pathname === path;

  const isActive = (path: string) => pathname.startsWith(path);

  const tabs = [
    { label: "All", path: "/dashboard" },
    { label: "Groups", path: "/dashboard/groups" },
    { label: "Unread", path: "/dashboard/unread" },
  ];
  return (
    <main>
      {isActive("/dashboard/setting") ? (
        <div className="flex flex-col gap-[8px]">
          <p className=" p-[8px] font-semibold text-[24px] text-mythemes-green">
            Setting
          </p>
          <div className="p-4 flex gap-2 justify-between bg-white items-center">
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
            <div>
              <ChevronRight
                onClick={() => {
                  router.push("/dashboard/setting/edit-profile");
                }}
                size="26px"
                className="text-gray-500 hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-[8px]">
          <p className=" p-[8px] font-semibold text-[24px] text-mythemes-green">
            Chats
          </p>
          <div className="p-4 flex gap-2 justify-between bg-white items-center">
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
            <div>
              <CirclePlus size="38px" className="text-mythemes-green" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b-4 text-[14px] text-center font-thin bg-white rounded-t-lg">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                href={tab.path}
                className={`hover:cursor-pointer hover:text-mythemes-green hover:border-b-mythemes-green hover:border-b-4 ${
                  isPageActive(tab.path)
                    ? "text-mythemes-green border-b-4 border-b-mythemes-green"
                    : "text-black"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default DashboardHeader;
