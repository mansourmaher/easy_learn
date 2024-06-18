"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface ContinueBtnProps {
  courseid?: string;
}

function ContinueBtn({ courseid }: ContinueBtnProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/course/${courseid}`);
  };
  return (
    <Button
      variant={"primary"}
      className="flex items-center gap-x-3"
      onClick={handleClick}
    >
      Continue
    </Button>
  );
}

export default ContinueBtn;
