"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { Star } from "lucide-react";
import ContinueToprofileBtn from "./continuetoprofilebtn";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface UnstroctorCardProps {
  teachers: any;
  index: number;
}

function SecondTeacherCard({ teachers, index }: UnstroctorCardProps) {
  // the map is located here c:/Users/HP/Desktop/PFE/lms-app-2/components/Map

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>loading...</p>,
        ssr: false,
      }),
    [teachers?.origin?.lalng]
  );
  return (
    <Card className="rounded-3xl border  bg-muted/40">
      <CardContent>
        <div className="flex justify-between  mr-2 p-4">
          <div className="flex justify-between items-center ">
            <div className="flex space-x-2 items-start">
              <Avatar>
                <AvatarImage
                  src={teachers.image ? teachers.image : "/images/teacher.png"}
                  alt="teacher"
                />
                <AvatarFallback>
                  <span className="text-lg font-semibold">
                    {teachers?.name![0]}
                  </span>
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-sm text-muted-foreground">
                <span>{teachers?.email}</span>

                <span>{teachers.name}</span>
                <span className="text-sm text-muted-foreground">
                  Joinded at{" "}
                  {format(new Date(teachers.createdAt!), "dd/MM/yyyy")}
                </span>
                <span className="text-bold text-black">
                  {teachers?.subtitle
                    ? teachers?.subtitle
                    : "No subtitle provided"}
                </span>
                <span className="text-sm text-muted-foreground mt-1.5  line-clamp-3 h-14 mb-6 w-full">
                  {teachers?.about ? teachers?.about : "No description"}
                </span>
              </div>
            </div>
          </div>
          <ContinueToprofileBtn id={teachers.id} />
        </div>
        <div className="flex flex-col mt-4 ">
          <div className="bg-gray-200 p-2 rounded-xl flex space-x-1 justify-between">
            {teachers?.avg ? (
              <Badge variant={"yellow"} className="flex space-x-1 p-2">
                {Array.from({ length: teachers.avg }).map((_, index) => (
                  <Star key={index} size={16} />
                ))}
              </Badge>
            ) : (
              <Badge variant={"yellow"} className="flex space-x-1 p-2">
                No rating
              </Badge>
            )}

            <Badge variant={"primary"} className="flex space-x-1 p-2">
              {teachers.totalReviews} Reviews
            </Badge>
            <Badge variant={"green"} className="flex space-x-1 p-2">
              {teachers.totlaPurchase} Participants
            </Badge>
            <Badge variant={"slate"} className="flex space-x-1 p-2">
              {teachers.totlacourse} courses
            </Badge>
          </div>
          <div className="mt-8">
            <Map center={teachers?.origin?.lalng} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SecondTeacherCard;
