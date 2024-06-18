import {
  getAllUnstroctor,
  getAllteachers,
} from "@/actions/teacher/get-all-unstroctor";
import React from "react";
import TecaherListItem from "./teacher-list-item";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import TeacherListSidebar from "./teacherList-sidebar";

interface GetTeacher {
  teacher: string;
  country: string;
  field: string;
  orderby: string;
}

const TeachersSidebar = async () => {
  const teachers = await getAllteachers({
    teacher: "",
    country: "",
    field: "",
    orderby: "",
  });

  return (
    <div className="bg-white">
      <div className="text-center">
        <p className="text-2xl font-bold mb-8 mt-8">
          Find a teacher that suits you
        </p>
        <div className="mb-6">
          <span>
            Start learning with a teacher that suits your learning style
            <br />
            and pace to help you improve your skills and knowledge in the best
            way possible for you
          </span>
        </div>
      </div>

      <div>
        <TeacherListSidebar teachers={teachers} />
      </div>
    </div>
  );
};
export default TeachersSidebar;
