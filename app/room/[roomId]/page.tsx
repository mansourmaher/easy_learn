import SingleRoomPage, {
  NoMeetingFound,
  Noaccestothemeeting,
} from "./_components/singlerrompage";
import { themettingStillexist } from "@/actions/metting/themetingstillexist";

import { GhostIcon } from "lucide-react";
import { theteacheristheownerofthemeet } from "@/actions/system/theteacheristheownerofthemeet";
import { studenthasaccestomeet } from "@/actions/metting/studenthasaccestothemeet";

const Page = async (params: {
  params: {
    roomId: string;
  };
}) => {
  const themeetingstillexist = await themettingStillexist(params.params.roomId);
  if (!themeetingstillexist) {
    return (
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto h-screen my-auto mt-64">
          <NoMeetingFound />
        </div>
      </div>
    );
  }
  const theuseristheownerofthemeeting = await theteacheristheownerofthemeet(
    params.params.roomId
  );
  const hasaccesornot = await studenthasaccestomeet(params.params.roomId);
  if (!hasaccesornot) {
    return (
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto h-screen my-auto mt-64">
          <Noaccestothemeeting />
        </div>
      </div>
    );
  }

  return (
    <>
      <SingleRoomPage
        theuseristheownerofthemeeting={theuseristheownerofthemeeting}
      />
    </>
  );
};

export default Page;
