"use client";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

interface TeacherListItemProps {
  teacher: any;
}

export default function TecaherListItem({ teacher }: TeacherListItemProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div
        className="mt-6 flex items-center space-x-3 mx-2 hover:shadow-lg cursor-pointer "
        onClick={() => {
          router.push(`/teachers/${teacher?.id}`);
        }}
      >
        <Avatar>
          <AvatarImage
            alt={teacher?.name || "No Name"}
            src={teacher?.image || "/images/avatar-placeholder.png"}
          />
          <AvatarFallback>
            {teacher?.name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="font-semibold">{teacher?.name || "No Name"}</div>
          <div className="text-gray-500 text-sm">
            {teacher?.subtitle || "No subtitle"}
          </div>
        </div>
        <div>
          <Star className="text-yellow-300" />
          <span className="text-sm font-semibold">
            {teacher.avg ? teacher.avg.toFixed(2) : "0.00"}
          </span>
        </div>
      </div>
    </div>
  );
}
