import OnboardingSheet from "@/components/OnboardingSeet";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-[932px] px-4 flex flex-col justify-center items-center ">
      <div className="relative w-[105px] h-[105px]">
        <Image src={"/Feather.png"} alt="img" fill className="object-contain" />
      </div>
      <p className="text-[26px] font-bold text-mythemes-green">Were Chatting</p>
      <OnboardingSheet/>
    </div>
  );
};

export default page;
