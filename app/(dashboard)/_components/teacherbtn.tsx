"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

function TeacherBtn() {
  const router = useRouter();
  return (
    <DropdownMenuItem onClick={() => router.push("/teacher_dashbord")} asChild>
      <div className="flex items-center justify-between cursor-pointer">
        Teacher Mode
        <FaChalkboardTeacher />
      </div>
    </DropdownMenuItem>
  );
}

export default TeacherBtn;
