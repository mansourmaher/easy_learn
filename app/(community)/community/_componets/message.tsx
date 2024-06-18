"use client";

import React from "react";
import { CommunityUploadImage } from "./comunity-upload-image";
import { Input } from "@/components/ui/input";
import { addPostInCommunity } from "@/actions/community/add-post-incomunity";
import { Loader, Send } from "lucide-react";
import { MdAttachment } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface MessageProps {
  communityId: string;
}

export default function Message({ communityId }: MessageProps) {
  const [image, setImage] = React.useState<string | null>(null);
  const [message, setMessage] = React.useState("");
  const [isloading, setIsloading] = React.useState(false);

  const handelAddPost = async (message: string, communityId: string) => {
    setIsloading(true);
    console.log(image, message, communityId);
    await addPostInCommunity(communityId, message, true, image!);
    setMessage("");
    setImage(null);
    setIsloading(false);
  };
  console.log(image);
  return (
    <div className="mt-2 bg-gray-100 p-2 text-center  text-gray-700">
      <div className="flex items-center justify-between gap-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CommunityUploadImage
                communityId={communityId}
                onchange={(url) => {
                  setImage(url);
                }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-gray-600 dark:text-gray-300">Image</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* <MdAttachment size={24} className="text-blue-500 cursor-pointer" /> */}
        <Input
          placeholder={image ? "Image ready to send" : "Write a message"}
          className="w-full p-4 rounded-lg bg-white"
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          disabled={!message && !image}
          onClick={() => handelAddPost(message, communityId)}
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
