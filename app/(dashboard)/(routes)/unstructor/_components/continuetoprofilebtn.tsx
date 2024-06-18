"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface ContinueToprofileBtnProps {
  id: string;
}

function ContinueToprofileBtn({ id }: ContinueToprofileBtnProps) {
  const router = useRouter();
  const handleContinue = () => {
    router.push(`/teachers/${id}`);
  };
  return (
    <Button variant={"primary"} className="" onClick={handleContinue}>
      Profile
    </Button>
  );
}

export default ContinueToprofileBtn;
