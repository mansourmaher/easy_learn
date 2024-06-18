import { teacherGetMyCourses } from "@/actions/teacher/teacher-getMy-courses";
import React from "react";
import SingleMycoursesPage from "./_components/single-my-courses-page";
import { auth } from "@/auth";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";

interface getCoursesParams {
  title?: string;
  category?: string;
  teacher?: string;
  level?: string;
}

interface SearchPageProps {
  searchParams: getCoursesParams;
}
const Page = async ({ searchParams }: SearchPageProps) => {
  const mycourses = await teacherGetMyCourses({
    title: searchParams.title!,
    category: searchParams.category!,
    teacher: searchParams.teacher!,
    level: searchParams.level!,
  });
  const user = await auth();
  const isaverifiredteacher =
    user?.user.role == "TEACHER" && user?.user.teacherAccess == true;
  if (!isaverifiredteacher) {
    return <div>Not authorized</div>;
  }
  if (mycourses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] space-y-4">
        <div className="flex space-x-6 items-center ">
          <h1 className="text-2xl font-semibold bg-gray-100 rounded-lg p-2">
            You have not created any courses yet
          </h1>
          <Link
            href="/teacher/create"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Create You First course
            <BiRightArrow className="inline-block ml-2" />
          </Link>
        </div>
        <Image
          alt="No courses"
          src="/defaultcourse.jpeg"
          width={750}
          height={700}
          className="rounded-lg"
        />
      </div>
    );
  }

  return (
    <div>
      <SingleMycoursesPage courses={mycourses} />
    </div>
  );
};
export default Page;
