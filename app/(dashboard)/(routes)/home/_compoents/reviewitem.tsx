import { fetchSometeacherReveiwforme } from "@/actions/Etudiant/fetchSometeacherReveiw";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface ReveiwItemProps {
  review: any;
}

function ReveiwItem({ review }: ReveiwItemProps) {
  return (
    <Card className="rounded-3xl border p-4 mb-4 w-full">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between">
          <a href={review.workUrl} className="flex items-center space-x-2">
            <Badge variant={"slate"} className="mr-2">
              {review.work}
            </Badge>
          </a>

          <Badge
            variant={
              cn({
                green: review.grade >= 15,
                yellow: review.grade >= 10 && review.grade < 15,
                destructive: review.grade < 10,
              }) as any
            }
          >
            {review.grade}
          </Badge>
        </div>
        <div className="flex justify-between">
          <Badge variant={"primary"}>{review.course.title}</Badge>
        </div>

        <div className="flex justify-between">
          <Badge variant={"yellow"}>{review.chapter.title}</Badge>
        </div>

        <span className="text-sm text-muted-foreground">
          {" "}
          <div dangerouslySetInnerHTML={{ __html: review.note }}></div>
        </span>
      </div>
    </Card>
  );
}

export default ReveiwItem;
