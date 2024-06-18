import { getAllUnstroctor } from "@/actions/teacher/get-all-unstroctor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface SingleUnstructorsPageProps {
  teacher: Awaited<ReturnType<typeof getAllUnstroctor>>[0];
}

function CarouselCardItem({ teacher }: SingleUnstructorsPageProps) {
  const router = useRouter();

  const handelclick = () => {
    router.push(`/teachers/${teacher.user?.id}`);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Avatar className="h-24 w-24">
        <AvatarImage
          src={teacher.user?.image ?? "/images/avatars/avatar-1.jpg"}
          alt={teacher.user?.name!}
        />

        <AvatarFallback>
          <span className="text-xl text-gray-400">
            {teacher.user?.name![0] ?? "JD"}
          </span>
        </AvatarFallback>
      </Avatar>
      <h2 className="text-xl font-semibold mt-4">
        {teacher.user?.name ?? "John Doe"}
      </h2>
      <p className="text-sm text-gray-600">
        {teacher.user?.subtitle ?? "No subtitle"}
      </p>
      <div className="flex items-center justify-center mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 text-yellow-500" />
        ))}
      </div>
      <Button
        variant={"primary"}
        className="mt-4 h-8"
        size={"sm"}
        onClick={() => handelclick()}
      >
        View Profile
      </Button>
    </div>
  );
}

export default CarouselCardItem;
