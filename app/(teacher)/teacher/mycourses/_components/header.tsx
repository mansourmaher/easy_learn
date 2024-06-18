import { getTeacherById } from "@/actions/teacher/get-teacher-byId";
import { getPercentageOfPlusque3StarsByteacher } from "@/actions/teacher/percentage-of-plusque3stars";
import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import CreateCourseBtn from "./createcoursebtn";

const Header = async () => {
  const teacher = await auth();
  const teacherId = teacher?.user?.id;
  const teacherStats = await getTeacherById(teacherId!);

  const percentage = await getPercentageOfPlusque3StarsByteacher();

  return (
    <div className="m-8 mx-24 mr-32">
      <div className="flex justify-between space-x-4 items-center ">
        <div className="flex flex-col  space-y-2 w-[90%]">
          {teacherStats.totalTecaherPurchase === 0 && (
            <div
              className=" border-green-200 bg-green-100 flex flex-col rounded-lg border   p-1"
              role="alert"
            >
              <h3 className="text-lg font-semibold text-green-800">
                Welcome to your dashboard
              </h3>

              <div>
                <div className="mt-2 text-sm text-muted-foreground">
                  <span className="text-green-800">
                    We're thrilled to have you join our team. While you might
                    not have any subscribers yet, don't worry—students will soon
                    start discovering your courses. We're confident that your
                    expertise and passion for teaching will attract many eager
                    learners. Best of luck, and we look forward to seeing your
                    impact!
                  </span>
                </div>
              </div>
            </div>
          )}
          {teacherStats.totalTecaherPurchase > 0 && (
            <div
              className={cn(
                percentage > 50
                  ? " border-green-200 bg-green-100"
                  : "bg-red-100 border-red-200",
                "flex flex-col rounded-lg border   p-1"
              )}
              role="alert"
            >
              <h3
                className={cn(
                  "text-lg font-semibold",
                  percentage > 50 ? "text-green-800" : "text-red-800"
                )}
              >
                {percentage > 50
                  ? "You are doing great! 👏"
                  : "You need to improve your content!"}
              </h3>

              <div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {percentage > 50 ? (
                    <span className="text-green-800">
                      You are doing great! 👏 Keep up the good work{" "}
                      {teacherStats?.totalTecaherPurchase} students have
                      purchased your courses {Math.round(percentage)} % of your
                      students Liked your content
                    </span>
                  ) : (
                    <span className="text-red-800">
                      You need to improve your content!{" "}
                      {teacherStats?.totalTecaherPurchase} students have
                      purchased your courses {Math.round(percentage)} % of your
                      students Liked your content
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <CreateCourseBtn />
      </div>
    </div>
  );
};
export default Header;
