import CardBlock from "@/components/Dashboard/CardBlock";
import CoursesTable from "@/components/Dashboard/CourcesTable";
import RecentActivity from "@/components/Dashboard/RecentActivity";
import RecentActivityTable from "@/components/Dashboard/RecentActivityTable";
import TopCourses from "@/components/Dashboard/TopCourses";

export default function Home() {
  return (

    <div className="w-full lg:max-w-[90vw] mx-auto">

      <div className="container mx-auto flex flex-col xl:flex-row justify-between p-4 gap-5 ">

        <div className="flex flex-col w-full  xl:w-2/3 ">
          <CardBlock />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <RecentActivity />
            <TopCourses />
          </div>
        </div>

        <div className="w-full xl:w-1/3 h-full pt-4">
          <RecentActivityTable />
        </div>
      </div>

      <CoursesTable />
    </div>
  );
}
