"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdSwitchAccessShortcut } from "react-icons/md";

function StudetnBtn() {
  const router = useRouter();
  return (
    <DropdownMenuItem onClick={() => router.push("/home")} asChild>
      <div className="flex items-center justify-between cursor-pointer">
        Student Mode
        <MdSwitchAccessShortcut />
      </div>
    </DropdownMenuItem>
  );
}

export default StudetnBtn;
