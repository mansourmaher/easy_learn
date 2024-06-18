import { Categories } from "./_components/categories";
import { getCourses } from "@/actions/course/get-courses";
import { CoursesList } from "@/components/courses-list";
import TopThreeCourses from "./_components/top-three-courses";
import MenuBar from "./_components/menu-bar";
import Bannner from "@/components/banner";
import PriceFilter from "@/components/pricefilter";

export const dynamic = "force-dynamic";

interface getCoursesParams {
  title?: string;
  category?: string;
  teacher?: string;
  level?: string;
  price?: string;
}

interface SearchPageProps {
  searchParams: getCoursesParams;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const courses = await getCourses({
    title: searchParams.title!,
    category: searchParams.category!,
    teacher: searchParams.teacher!,
    level: searchParams.level!,
    price: searchParams.price!,
  });

  return (
    <>
      <div className="px-52 pt-6 md:hidden md:mb-0 block"></div>
      <div className="p-6 space-y-6 ">
        <div className="flex justify-center">
          <Categories />
        </div>

        <TopThreeCourses />
        {!courses ? (
          <div>
            <h1>No courses found</h1>
          </div>
        ) : (
          <>
            <Bannner title="Are you interested in learning something new? lets register and start learning" />
            <MenuBar />
            <PriceFilter />
            <CoursesList items={courses} />
          </>
        )}
      </div>
    </>
  );
};

export default SearchPage;
