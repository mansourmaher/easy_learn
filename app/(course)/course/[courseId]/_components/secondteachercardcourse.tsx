import { getCourseById } from "@/actions/course/get-course-byId";
import {
  getCoursesCountByTeacher,
  getTeacherReviewCount,
} from "@/actions/course/get-courses-count-by-teacher";
import { getCountUserInEachCourse } from "@/actions/teacher/get-count-user-in-each-course";
import { getTeacherRating } from "@/actions/teacher/get-teacher-rating";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Course, User } from "@prisma/client";
import { Medal, Play, PlayCircle, StarIcon, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
interface TeacherCardCourseProps {
  course: Awaited<ReturnType<typeof getCourseById>> | null;
}
const SecondteacherCardcourse = async ({ course }: TeacherCardCourseProps) => {
  const courseCount = await getCoursesCountByTeacher(course!.userId!);
  const reviewCount = await getTeacherReviewCount(course!.userId!);
  const rating = await getTeacherRating(course!.userId!);
  const studentCount = await getCountUserInEachCourse(course!.userId!);

  return (
    <div className="py-8 mx-6">
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage
            alt="Profile picture"
            src={course?.user?.image || "/images/avatar-placeholder.png"}
          />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-4  ">
            <div className="col-span-3 ">
              <h2 className="text-xl font-semibold">{course?.user?.name}</h2>
              <p className="text-sm text-gray-500">
                {course?.user?.subtitle || "No subtitle"}
              </p>
            </div>
            <div className="flex ">
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <div key={currentRating} className="flex flex-row space-x-2">
                    <label>
                      <input
                        type="radio"
                        name="rate"
                        value={currentRating}
                        checked={rating === currentRating}
                        readOnly
                        className="hidden"
                      />
                      <FaStar
                        className={cn(
                          "text-2xl",
                          rating >= currentRating
                            ? "text-yellow-400"
                            : "text-gray-400"
                        )}
                      />
                    </label>
                  </div>
                );
              })}
              <span>
                ({(Math.round(rating * 100) / 100).toFixed(2)}) ({reviewCount}{" "}
                Review)
              </span>
            </div>
          </div>
          <p className="mt-2 text-gray-700">
            {course?.user?.about || "No about"}
          </p>
          <div className="md:flex md:flex-row md:justify-between md:items-center flex flex-col space-y-2">
            <div className="md:flex flex-row md:space-x-6 mt-6 md:items-center">
              <div className="flex  items-center gap-x-2">
                <Medal className="w-4 h-4 text-blue-400" />
                <div className="md:flex md:gap-x-1 flex gap-x-2">
                  <div className="text-blue-400">{reviewCount}</div>
                  <div className="text-blue-400">Review</div>
                </div>
              </div>
              <div className="md:flex items-center gap-x-2 text-blue-400">
                <div className="flex  items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <div>{studentCount} students</div>
                </div>
              </div>
              <div className="md:flex  items-center gap-x-2">
                <div className="flex  items-center space-x-2">
                  <PlayCircle className="w-4 h-4 text-blue-400" />
                  <div className="md:flex flex-row md:gap-x-1 items-center">
                    <Link href={`/search?teacher=${course?.user?.name}`}>
                      <p className="text-blue-400 cursor-pointer ">
                        {courseCount} Courses
                      </p>
                    </Link>
                    {/* <div className="text-blue-400 ">{courseCount} Courses</div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {course?.user?.createdAt ? (
                <Badge variant="secondary">
                  Instructor since{" "}
                  {new Date(course?.user?.createdAt).getFullYear()}
                </Badge>
              ) : (
                <Badge variant="secondary">No date</Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondteacherCardcourse;
