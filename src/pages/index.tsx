import CardBlock from "@/components/Dashboard/CardBlock";
import CoursesTable from "@/components/Dashboard/CourcesTable";
import RecentActivity from "@/components/Dashboard/RecentActivity";
import RecentActivityTable from "@/components/Dashboard/RecentActivityTable";
import TopCourses from "@/components/Dashboard/TopCourses";

export default function Home() {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-between m-2  lg:m-8 lg:mx-20 space-y-4 md:space-y-0">
      
      
        <div className="flex flex-col w-full xl:w-2/3">
          <CardBlock />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <RecentActivity />
            <TopCourses />
          </div>
        </div>

        <div className="w-full xl:w-1/3 px-10 md:p-10">
          <RecentActivityTable />
        </div>
      </div>

      <CoursesTable />
    </>
  );
}
