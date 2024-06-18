"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface ContinueBtnProps {
  chapterId?: string;
  courseId?: string;
}

function ContinueTochapter({ chapterId, courseId }: ContinueBtnProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/course/${courseId}/chapter/${chapterId}`);
  };
  return (
    <Button
      variant={"white"}
      className="flex items-center gap-x-3 mr-4"
      onClick={handleClick}
    >
      Continue
    </Button>
  );
}

export default ContinueTochapter;
