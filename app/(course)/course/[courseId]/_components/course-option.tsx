import { CiVideoOn } from "react-icons/ci";
import { getCourseById } from "@/actions/course/get-course-byId";
import { ShoppingCart, Signal } from "lucide-react";

interface CourseOptionProps {
  course: Awaited<ReturnType<typeof getCourseById>> | null;
  courseTotalPurchased: number;
}

export default function CourseOption({
  course,
  courseTotalPurchased,
}: CourseOptionProps) {
  return (
    <div className="p-8 mx-6">
      <hr className="mb-8" />
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Course Overview</h1>
        <p className="text-gray-600">
          Below you will find key details about this course, including the level
          of difficulty, the number of lessons, and the total purchases. This
          information will help you understand what to expect from the course.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-row items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="rounded-full border p-3 border-blue-500">
            <Signal size={30} className="text-blue-600" />
          </div>
          <div>
            <span className="text-lg font-semibold">Level</span>
            <p className="mt-1 text-gray-700">
              {course?.level || "Not Provided"}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4 p-4 bg-gray-50 rounded-lg ">
          <div className="rounded-full border p-3 border-blue-500">
            <CiVideoOn size={30} className="text-blue-600" />
          </div>
          <div>
            <span className="text-lg font-semibold">Lessons</span>
            <p className="mt-1 text-gray-700">
              {course?.chapters?.length || 0} Lessons
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4 p-4 bg-gray-50/100 rounded-lg ">
          <div className="rounded-full border p-3 border-blue-500">
            <ShoppingCart size={30} className="text-blue-600" />
          </div>
          <div>
            <span className="text-lg font-semibold">Purchases</span>
            <p className="mt-1 text-gray-700">
              {courseTotalPurchased}{" "}
              {courseTotalPurchased === 1 ? "Purchase" : "Purchases"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
