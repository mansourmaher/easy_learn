"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

export const Social = () => {
  const connect = (data: string) => {
    signIn(data, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex w-full  ">
      <Button
        size="lg"
        className="w-full bg-gray-100 text-gray-800 border-gray-200 hover:border-gray-300 hover:shadow-md hover:bg-slate-200/80 transition-all duration-200 ease-in-out  border"
        variant="outline"
        onClick={() => {
          connect("github");
        }}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
