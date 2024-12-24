import { Button } from "@/components/ui/button";
import SettingHeader from "../components/SettingHeader";
import FormEditUser from "../components/FormChangeUsername";
import EditPic from "@/components/EditPic";

const page = () => {
  const initialValues = {
    userName: "ivannafrizaldi",
    newUsername: "",
  };
  return (
    <div className="px-4 flex flex-col gap-[16px] mt-[44px]">
      <SettingHeader />
      {/* <EditPic/> */}
      <div className="min-h-[621px] flex flex-col justify-between bg-white p-4">
        <div className=" flex flex-col gap-[16px]">
          <FormEditUser
            initialValues={initialValues}
            isLoading={false}
            onSubmit={undefined}
          />
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
