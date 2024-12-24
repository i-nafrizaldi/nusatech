import CardUsers from "@/components/CardUsers";
import DashboardHeader from "@/components/DashboardHeader";

const page = () => {
  return (
    <div className="px-4 flex flex-col gap-[16px] mt-[44px]">
      <DashboardHeader />

      <CardUsers />
    </div>
  );
};

export default page;
