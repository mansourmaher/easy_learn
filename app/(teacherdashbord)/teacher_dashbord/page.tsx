import CourseChart from "./_componets/course_fetchdata";
import FetchDonutsData from "./_componets/fetch_donuts_data";
import DashboardCard from "./_componets/dashbord_card";
export default function Page() {
  return (
    <div className="flex  w-full flex-col max-h-screen">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <DashboardCard />

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <CourseChart />
          <FetchDonutsData />
        </div>
      </main>
    </div>
  );
}
