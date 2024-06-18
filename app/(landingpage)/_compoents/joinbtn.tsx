"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import React from "react";
import { MdOutlineBluetoothConnected } from "react-icons/md";

function JoinBtn() {
  const user = useSession();
  const role = user.data?.user.role;
  const handleclick = () => {
    if (!user.data) {
      window.location.href = "/sign-in";
    }
    if (role === "STUDENT") {
      window.location.href = "/home";
    }
    if (role === "TEACHER") {
      window.location.href = "/teacher_dashbord";
    }
    if (role === "ADMIN") {
      window.location.href = "/admin/admin_dashboard";
    }
  };
  return (
    <div>
      <Button variant={"primary"} onClick={handleclick}>
        Join Now
      </Button>
    </div>
  );
}

export default JoinBtn;
