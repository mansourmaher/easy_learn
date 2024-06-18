"use client";
import { totalPurchase } from "@/actions/course/total-purchase";
import { teacherGetMyCourses } from "@/actions/teacher/teacher-getMy-courses";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Eye, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface CourseItemProps {
  course: Awaited<ReturnType<typeof teacherGetMyCourses>>[0];
}

export default function CourseItem({ course }: CourseItemProps) {
  const router = useRouter();
  return (
    <div className="mb-8">
      <Card className="w-full max-w-sm rounded-xl">
        <Image
          alt="Course thumbnail"
          width="1000"
          height="1000"
          className="h-[200px] rounded-t-xl object-cover"
          src={course.imageUrl ? course.imageUrl : "/defaultcourse.jpeg"}
        />

        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex justify-between items-end gap-1">
            <h3 className="line-clamp-2 text-lg font-semibold">
              {course.title!}
            </h3>

            <span className="flex space-x-2 items-center">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              {course.totalStars !== 0 &&
                (course.totalStars! / course.totalReviews!).toFixed(2)}
              {course.totalStars === 0 && "No reviews"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="green"
                size="sm"
                onClick={() => {
                  router.push(`courses/${course.id}`);
                }}
                className="p-4"
              >
                <Edit className="mr-2" />
                Edit
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  router.push(`mycourses/${course.id}`);
                }}
                className="p-4"
              >
                <Eye className="mr-2" />
                {course.courseUser.length} Purchases
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/*<Card className="w-full max-w-sm rounded-xl border">
                    <Image
                      alt="Course thumbnail"
                      width="1000"
                      height="1000"
                      className="h-[200px] rounded-t-xl object-cover"
                      src={course.imageUrl!}
                    />

                    <CardContent className="flex flex-col gap-4 p-6">
                      <div className="flex flex-col items-end gap-1">
                        <h3 className="line-clamp-2 text-lg font-semibold">
                          {course.ttile!}
                        </h3>
                        
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button variant="secondary" size="sm"  onClick={() => {
                      router.push(`courses/${course.id}`);
                    }}
                            Edit
                          </Button>
                          <Button variant="indigo" size="sm"  onClick={() => {
                      router.push(`mycourses/${course.id}`);
                    }}
                     <Edit className="mr-2" />
                    Edit
                          </Button>
                          <Eye className="mr-2" />
                    {course.courseUser.length} Purchases
                          </Button>
                        </div>
                        
                      </div>
                    </CardContent>
                          </Card>*/
