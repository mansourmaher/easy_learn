"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

function CreateCourseBtn() {
  const router = useRouter();
  return (
    <Button
      variant={"primary"}
      className="w-40"
      onClick={() => router.push("/teacher/create")}
    >
      Create Course
    </Button>
  );
}

export default CreateCourseBtn;
