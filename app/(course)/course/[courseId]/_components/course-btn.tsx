import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { on } from "events";
import React from "react";

export default function CourseBtn() {
  const btns = [
    {
      title: "Overview",
    },
  ];
  const [selected, setSelected] = React.useState(0);

  return (
    <div>
      <div className="m-8">
        <div className="flex flex-row space-x-6 ">
          <Button
            variant={selected === 0 ? "primary" : "ghost"}
            className="rounded-full  p-4"
            size="sm"
            onClick={() => {
              selected === 1 
              setSelected(0);
            }}
          >
            Overview
          </Button>
         
        </div>
      </div>
    </div>
  );
}
