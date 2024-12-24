import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, MessageSquareMore, Plus, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const TextArea = () => {
  return (
    <div className=" px-4 sticky h-[110px]  w-full  place-items-center mx-auto flex gap-4 justify-center bg-white bottom-0">
      <div>
        <Plus />
      </div>
      <div className="w-full">
        <Textarea className=" bg-mythemes-bgWhite mx-auto h-[62px]" placeholder="Text Message" />
      </div>
      <div>
        <MessageSquareMore />
      </div>
    </div>
  );
};

export default TextArea;
