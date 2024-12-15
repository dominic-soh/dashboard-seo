import { DashboardHeader } from "@/components/DashboardHeader/DashboardHeader";
import { DashboardMain } from "@/components/DashboardMain/DashboardMain";
import { DashboardMenu } from "@/components/DashboardMenu/DashboardMenu";

export default function Home() {
  return (
    <div className="grid grid-rows-7 grid-flow-col grid-cols-[200px_1fr] gap-4 min-h-screen p-4">
      <div className="row-span-7">
        <DashboardMenu />
      </div>
      <div className="col-span-2">
        <DashboardHeader />
      </div>
      <div className="row-span-6 col-span-2">
        <DashboardMain />
      </div>
    </div>
  );
}
