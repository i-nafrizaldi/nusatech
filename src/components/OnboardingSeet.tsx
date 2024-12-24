"use client";

import { ChevronLeft, Dot, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const OnboardingSheet = () => {
  const router = useRouter();
  const [currentSheet, setCurrentSheet] = useState(1);

  const handleNext = () => {
    if (currentSheet < 3) {
      setCurrentSheet(currentSheet + 1);
    } else {
      router.push("/login");
    }
  };

  const handleSkip = () => {
    router.push("/login");
  };

  return (
    <>
      <Sheet open>
        <SheetContent
          side="bottom"
          className="max-w-[430px] rounded-xl flex flex-col gap-4"
        >
          <SheetHeader>
            <SheetTitle className="text-[24px] text-center text-mythemes-green">
              {currentSheet === 1
                ? "Selamat Datang Coyy !!"
                : currentSheet === 2
                ? "Complete Your Profile"
                : "You're All Set!"}
            </SheetTitle>
          </SheetHeader>
          {currentSheet === 1 && (
            <div>
              <p className="text-center text-[12px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
                quis!
              </p>
              <div className="flex justify-center gap-2">
                <Minus className="text-mythemes-green" />
                <Dot className="text-gray-400" />
                <Dot className="text-gray-400" />
              </div>
            </div>
          )}
          {currentSheet === 2 && (
            <div>
              <p className="text-center text-[12px]">
                Welcome to the onboarding process! Let's get started.
              </p>
              <div className="flex justify-center gap-2">
                <Dot className="text-gray-400" />
                <Minus className="text-mythemes-green" />
                <Dot className="text-gray-400" />
              </div>
            </div>
          )}
          {currentSheet === 3 && (
            <div>
              <p className="text-center text-[12px]">
                You've successfully completed the onboarding!
              </p>
              <div className="flex justify-center gap-2">
                <Dot className="text-gray-400" />
                <Dot className="text-gray-400" />
                <Minus className="text-mythemes-green" />
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline" onClick={handleSkip}>
              Skip
            </Button>
            <Button className="bg-mythemes-green" onClick={handleNext}>
              {currentSheet === 3 ? "Finish" : "Next"}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default OnboardingSheet;
