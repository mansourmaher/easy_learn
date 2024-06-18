import { db } from "@/lib/db";
import SingleChapterPage from "./_components/single-chapter-page";
import { auth } from "@/auth";
import { GhostIcon } from "lucide-react";

const ChapterPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
    },
    include: {
      course: true,
    },
  });
  if (!chapter) return NoChapterFound();
  const user = await auth();
  const userId = user?.user.id as string;
  const existingPurchase = await db.courseUser.findFirst({
    where: {
      userId: userId,
      courseId: params.courseId,
    },
  });
  const isPurchased = existingPurchase ? true : false;

  const isLockedchapter =
    chapter?.isFree === false && chapter?.course?.price! > 0 && !isPurchased;
  if (isLockedchapter) {
    return <UnothorizeState />;
  }

  return (
    <>
      <SingleChapterPage
        courseId={params.courseId}
        chapterId={params.chapterId}
        isPurchased={isPurchased}
      />
    </>
  );
};

export default ChapterPage;

function UnothorizeState() {
  return (
    <div className="flex h-screen my-auto flex-col items-center justify-center gap-2">
      <GhostIcon className="h-16 w-16 text-muted-foreground" />
      <div className="text-2xl font-semibold text-muted-foreground">
        You are not authorized to view this chapter
      </div>
      <div className="text-sm text-muted-foreground">
        Please purchase the course to view this chapter
      </div>
    </div>
  );
}
function NoChapterFound() {
  return (
    <div className="flex h-screen  flex-col items-center justify-center gap-2">
      <GhostIcon className="h-16 w-16 text-muted-foreground" />
      <div className="text-2xl font-semibold text-muted-foreground">
        Sorry No chapter Found
      </div>
      <div className="text-sm text-muted-foreground">
        Start new chapter by purchasing a course
      </div>
    </div>
  );
}
