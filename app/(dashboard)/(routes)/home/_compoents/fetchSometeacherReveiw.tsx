import { fetchSometeacherReveiwforme } from "@/actions/Etudiant/fetchSometeacherReveiw";
import { Card } from "@/components/ui/card";
import React from "react";
import ReveiwItem from "./reviewitem";

export const FetchSometeacherReveiw = async () => {
  const somereview = await fetchSometeacherReveiwforme();

  return (
    <div className="flex flex-col  overflow-y-auto ">
      <span className="text-lg font-semibold mb-2 ml-6 bg-gray-100 text-center p-4 rounded-xl">
        We pick some reviews for you
      </span>
      <Card className="rounded-3xl border p-4 bg-muted/40 mx-4 max-h-screen">
        <div className="flex flex-col">
          {somereview?.length === 0 && (
            <span className="text-sm text-muted-foreground mt-1.5  line-clamp-3 h-14 mb-6">
              No reviews yet
            </span>
          )}

          {/* <span className="text-lg font-semibold">
          We pick some reviews for you
        </span>
        <span className="text-sm text-muted-foreground mt-1.5  line-clamp-3 h-14 mb-6"></span> */}
          {somereview?.map((review, index) => (
            <div key={index}>
              <ReveiwItem review={review} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FetchSometeacherReveiw;
