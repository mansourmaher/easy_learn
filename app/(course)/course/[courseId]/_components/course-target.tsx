import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import React from "react";

interface CourseTargetProps {
  targets: string[];
}

export default function CourseTarget({ targets }: CourseTargetProps) {
  return (
    <>
      <hr className="mx-6" />
      <div className="p-6 bg-white rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">What you'll learn</h1>
        <p className="text-gray-600 mb-4">
          This card highlights the key learning targets of this course. By the
          end of the course, you will have mastered the following skills and
          concepts:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {targets.map((target, index) => (
            <div
              key={index}
              className="flex items-start bg-gray-50 p-4 rounded-md shadow-sm"
            >
              <Check
                size={24}
                className="text-green-500 mr-3 flex-shrink-0 mt-1"
              />
              <span className="text-gray-800">{target}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
