"use client";
import { Input } from "@/components/ui/input";
import { Loader, Search, Send } from "lucide-react";
import React from "react";
import { searchProblemInCommunity } from "@/actions/community/search-problem-in-community";
import { Button } from "@/components/ui/button";
import { deleteallcomunty } from "@/actions/community/deleteallcomunti";

export default function CommunitySearchProblem() {
  const [message, setMessage] = React.useState("");
  const [isloading, setIsloading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const searchProblem = async (message: string) => {
    await searchProblemInCommunity(message);
    setMessage("");
  };
  // const handeledelete = async () => {
  //   await deleteallcomunty();
  // };

  return (
    <div className="mt-2 bg-gray-100 p-2 text-center text-sm  text-gray-700">
      {/* <Button
        className="bg-blue-500 text-white rounded-lg p-2 cursor-pointer"
        onClick={handeledelete}
      >
        delete
      </Button> */}
      <div className="flex items-center justify-between gap-x-2">
        <Search size={24} className="h-6 w-6 text-blue-400" />
        <Input
          placeholder="Search for a problem please be specific"
          className="w-full p-4 rounded-lg bg-white"
          type="text"
          name="message"
          value={message}
          onChange={handleChange}
        />
        <Button
          disabled={!message}
          onClick={() => searchProblem(message)}
          className="bg-blue-500 text-white p-2 rounded-lg hover:text-white"
          variant={"outline"}
        >
          {isloading ? (
            <Loader size={24} className="animate-spin text-white" />
          ) : (
            <Send
              size={24}
              className="cursor-pointer disabled:cursor-not-allowed"
            />
          )}
        </Button>
      </div>
    </div>
  );
}
