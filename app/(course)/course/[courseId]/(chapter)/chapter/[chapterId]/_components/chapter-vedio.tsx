import Video from "next-video";

interface Props {
  videosrc: string | null | undefined;
  img: string;
}

export default function ChapterVedio({ videosrc, img }: Props) {
  return (
    <div className="ml-8 flex gap-x-2 ">
      <div className="relative w-full h-[500px] aspect-video rounded-xl mb-4">
        <Video
          src={videosrc!}
          controls
          className="w-[500px] h-full"
          accentColor="#A9F3F8"
        />
      </div>
      <div>
        {" "}
        <hr className="h-1 w-full bg-slate-500" />
      </div>
    </div>
  );
}
