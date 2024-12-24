import Navbar from "@/components/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-[430px] mx-auto min-h-[932px] flex flex-col bg-mythemes-bgWhite ">
      <div className="flex-1 ">{children}</div>
      <Navbar />
    </main>
  );
}
