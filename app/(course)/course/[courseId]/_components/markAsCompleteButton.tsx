"use client";

import {
  markAsComplete,
  markfreechapterInUnpurchasedCourseasComplete,
} from "@/actions/Etudiant/mark-asComplete";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

import React from "react";
import toast from "react-hot-toast";

interface markAsCompleteButtonProps {
  disabled?: boolean;

  chapterId: string;
  courseId: string;
  mustUploadwork?: boolean;
  isPurchased: boolean;
}

export default function MarkAsCompleteButton({
  disabled,
  courseId,
  mustUploadwork,
  isPurchased,

  chapterId,
}: markAsCompleteButtonProps) {
  const router = useRouter();
  const onclick = async (chapterId: string) => {
    if (!isPurchased) {
      const response = await axios.post(`/api/courses/${courseId}/checkout`);
      window.location.assign(response.data.url);
      return;
    }
    await markAsComplete(chapterId, courseId);
    toast.success("Chapter marked as complete");

    window.location.reload();
    router.refresh();
  };

  return (
    <div>
      <Button
        disabled={disabled}
        onClick={() => onclick(chapterId)}
        className="w-full"
        variant={mustUploadwork ? "secondary" : "primary"}
      >
        {mustUploadwork ? "Upload your work" : "Mark as complete"}
      </Button>
    </div>
  );
}
