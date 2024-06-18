import {
  etudiantgetycourses,
  getThelastcoursethathaveprogressIn,
} from "@/actions/Etudiant/etudiant-get-mycourses";
import React from "react";
import CourseStudentItem from "./course-student-item";
import CourseInProgressCard from "../home/_compoents/courseinprogresscard";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ContinueTochapter from "../home/_compoents/continuetochapter";
import FetchSometeacherReveiw from "../home/_compoents/fetchSometeacherReveiw";
import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";

const CourseStudentList = async () => {
  const mycourses = await etudiantgetycourses();
  const laschapter = await getThelastcoursethathaveprogressIn();

  if (mycourses.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] space-y-4">
        <div className="flex space-x-6 items-center ">
          <h1 className="text-2xl font-semibold bg-gray-100 rounded-lg p-2">
            You have not enrolled in any courses Start learning now
          </h1>
          <Link
            href="/search"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Browse courses <BiRightArrow className="inline-block ml-2" />
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1200px_1fr] ml-4 mt-8  ">
      <div className="">
        {laschapter && (
          <>
            <div className="mt-6">
              <span className="text-lg font-semibold  ml-2 bg-gray-100 p-4 mb-4 mt-4 rounded-xl ">
                Continue learning where you left off
              </span>
            </div>
            <div className=" mt-6 mb-4  ">
              <div className="flex items-center  justify-between space-x-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 p-4 rounded-lg shadow-md">
                <div className="flex space-x-4">
                  <img
                    alt="Course"
                    className="w-14 h-14 "
                    src={laschapter?.courseInfo?.imageUrl!}
                  />
                  <div className="space-x-1">
                    <h3 className="text-lg font-medium text-white">
                      {laschapter?.courseInfo?.title!}
                    </h3>
                    <p className="text-gray-200">
                      {laschapter?.thenextChapter?.title!}
                    </p>
                  </div>
                </div>

                <ContinueTochapter
                  courseId={laschapter?.courseInfo?.id!}
                  chapterId={laschapter?.thenextChapter?.id!}
                />
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-[580px_580px] gap-8 place-content-center">
          {mycourses.map((course) => (
            <div key={course.id}>
              <CourseInProgressCard etudiantgetycourses={course} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <FetchSometeacherReveiw />
      </div>
    </div>
  );
};

export default CourseStudentList;
