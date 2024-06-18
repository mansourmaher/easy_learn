import { etudiantgetycourses } from "@/actions/Etudiant/etudiant-get-mycourses";
import CourseProgress from "@/components/course-progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";
import ContinueBtn from "./continuebtn";
import CertifModal from "@/components/models/_certif-modal/certif-modal";
import { getCourseUser } from "@/actions/system/get-courseUser";
import { auth } from "@/auth";
import { BiCertification } from "react-icons/bi";

interface CourseInprogress {
  etudiantgetycourses: Awaited<ReturnType<typeof etudiantgetycourses>>[0];
}
const CourseInProgressCard = async ({
  etudiantgetycourses,
}: CourseInprogress) => {
  const user = await auth();
  const userId = user?.user.id;
  const courseuser = await getCourseUser(
    userId!,
    etudiantgetycourses.course.id
  );
  return (
    <Card className="rounded-3xl border p-4 bg-muted/40">
      <CardContent>
        <div className="flex justify-between items-center mr-3">
          <span className="text-sm text-muted-foreground">
            {etudiantgetycourses.course.chapters.length} Chapters
          </span>
          {etudiantgetycourses.progress === 100 ? (
            <CertifModal courseUser={courseuser} />
          ) : (
            <ContinueBtn courseid={etudiantgetycourses.course.id} />
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">
            {etudiantgetycourses.course.title}
          </span>
          <span className="text-sm text-muted-foreground mt-1.5  line-clamp-3 h-14 mb-6">
            {etudiantgetycourses.course.description}
          </span>
          <div className="bg-gray-200 p-6 rounded-xl flex space-x-1">
            {" "}
            <Progress value={etudiantgetycourses.progress} className="" />
            <span className="text-sm text-muted-foreground flex">
              {Math.round(etudiantgetycourses.progress)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseInProgressCard;
