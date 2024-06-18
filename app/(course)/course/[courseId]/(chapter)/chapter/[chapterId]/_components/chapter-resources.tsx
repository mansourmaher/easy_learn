import { Attachment } from "@prisma/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import PdfResource from "./pdf-resource";

interface ChapterResourcesProps {
  resources: Attachment[];
}

export default function ChapterResources({ resources }: ChapterResourcesProps) {
  return (
    <div>
      <h1 className=" font-semibold mt-4 bg-gray-100 rounded-lg p-4 m-2">
        Some resources to help you
      </h1>

      <ScrollArea className="h-[200px]  rounded-md  p-4 ">
        {resources?.map((resource, index) => (
          <div key={index}>
            <PdfResource
              key={index}
              info={resource.url}
              work={"Resource " + (index + 1)}
            />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
