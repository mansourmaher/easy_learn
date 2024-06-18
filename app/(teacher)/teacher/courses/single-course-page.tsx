"use client";

import { getCourseIncludeProgresse } from "@/actions/teacher/get-all-course-include-progresse";
import CourseButton from "./_components/course-button";

import { teacherGetMyCourses } from "@/actions/teacher/teacher-getMy-courses";
import { DataTable } from "./_components/table-user/data-table";
import { columns } from "./_components/table-user/columns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Users } from "lucide-react";
import TopstudentCard from "../check/_components/topstudentcard";
import TopstudentCardindedicatedcourse from "../mycourses/_components/topstudetncard";
import { getthebeststudentineachcourse } from "@/actions/teacher/getthebeststudentinthebest5course";

interface SingleCoursePageProps {
  couresesIncludeProgress: Awaited<
    ReturnType<typeof getCourseIncludeProgresse>
  >;
}

export default function SingleCoursePage({
  couresesIncludeProgress,
}: SingleCoursePageProps) {
  return (
    <div className="flex max-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-3" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle className="flex gap-x-2">
                  <Users className="h-6 w-6 " />
                  <span className="">Your studnets in this course</span>
                </CardTitle>
                <CardDescription>
                  We dispaly your student ordered by their score in this course
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {/*@ts-ignore*/}
              <DataTable data={couresesIncludeProgress} columns={columns} />
            </CardContent>
          </Card>
          {/* <TopstudentCard topstudent={topstudent} /> */}
          {/* <TopstudentCard topstudent={couresesIncludeProgress} /> */}
          {/* <TopstudentCardindedicatedcourse topstudent={topstudent} /> */}
        </div>
      </main>
    </div>
  );
}
