import EditPic from "@/components/EditPic";
import { Button } from "@/components/ui/button";
import FormEditProfile from "../components/FormEditProfile";
import OnboardingSheet from "@/components/OnboardingSeet";

const page = () => {
  const initialValues = {
    name: "Ivan Nafrizaldi",
    email: "ivannafrizaldi@mail.com",
  };
  return (
    <div className="px-4 flex flex-col gap-[16px] mt-[44px]">
      <EditPic />
      <div className="min-h-[621px] flex flex-col justify-between bg-white p-4">
        <div className=" flex flex-col gap-[16px]">
          <FormEditProfile initialValues={initialValues} />
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
