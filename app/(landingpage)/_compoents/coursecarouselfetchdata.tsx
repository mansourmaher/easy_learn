import { getCourses } from "@/actions/course/get-courses";
import React from "react";
import Listofcourseswithcarousel from "./coursescarousel";
import Bannner from "@/components/banner";

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

export const CourseCarouselFetchdata = async ({
  searchParams,
}: SearchPageProps) => {
  const courses = await getCourses({
    title: searchParams?.title!,
    category: searchParams?.category!,
    teacher: searchParams?.teacher!,
    level: searchParams?.level!,
    price: searchParams?.price!,
  });

  return (
    <>
      <Bannner title="Are you interested in learning something new? lets register and start learning" />

      <Listofcourseswithcarousel courses={courses} />
    </>
  );
};

export default CourseCarouselFetchdata;
