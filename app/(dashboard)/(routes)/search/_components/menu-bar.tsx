"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";

export default function MenuBar() {
  const skillLevels = ["Beginner", "Intermediate", "Advanced"];
  const [selectedLevel, setSelectedLevel] = React.useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentLvel = searchParams.get("level");
  const currentCategory = searchParams.get("category");
  const currentTitle = searchParams.get("title");
  const teacher = searchParams.get("teacher");
  const pathname = usePathname();

  const isSlected = (level: string) => level === currentLvel;
  const onclick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          category: currentCategory,
          teacher: teacher,

          level: selectedLevel,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  };

  return (
    <div className="m-8">
      <p className="text-2xl font-bold mb-8">Filter by Skill Level</p>
      <div className="mb-6">
        <span>
          We try to make it easy for you to find the right course for you
          <br />
          Select the skill level that best match your current skill level
        </span>
      </div>
      {/* <div className="flex ">
        {skillLevels.map((skillLevel) => (
          <div key={skillLevel} className="flex items-center">
            <Button
              className={cn(
                "mr-4",
                isSlected(skillLevel) ? "bg-primary text-white border-b " : ""
              )}
              variant={isSlected(skillLevel) ? "primary" : "secondary"}
              onClick={() => {
                alert("clicked");
                setSelectedLevel(skillLevel);
                onclick();
              }}
            >
              {skillLevel}
            </Button>
          </div>
        ))}
      </div> */}
    </div>
  );
}
