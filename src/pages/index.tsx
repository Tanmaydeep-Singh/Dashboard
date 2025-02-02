import CardBlock from "@/components/Dashboard/CardBlock";
import CoursesTable from "@/components/Dashboard/CourcesTable";
import RecentActivity from "@/components/Dashboard/RecentActivity";
import RecentActivityTable from "@/components/Dashboard/RecentActivityTable";
import TopCourses from "@/components/Dashboard/TopCourses";

export default function Home() {

  return (
    <>

      <div className=" flex justify-around m-2">
        <div className=" flex-col">
          <CardBlock />
          <div className=" flex">
            <RecentActivity/>
            <TopCourses />
          </div>
        </div>

        <RecentActivityTable />
      </div>

      <CoursesTable />

    </>

  );
}
