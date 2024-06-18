"use client";
import { useParams, useRouter } from "next/navigation";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 } from "uuid";
import { Button } from "@/components/ui/button";
import { sendMessageofthestream } from "@/actions/conversation/sendmessageofstream";
import { closeMeeting } from "@/actions/system/closemeeting";
import { GhostIcon } from "lucide-react";

interface SingleRoomPageProps {
  theuseristheownerofthemeeting: boolean;
}

const SingleRoomPage = ({
  theuseristheownerofthemeeting,
}: SingleRoomPageProps) => {
  const { roomId } = useParams();
  const id = roomId;
  const link = window.location.href;
  const router = useRouter();

  const sendmessage = async () => {
    const link = window.location.href;
    await sendMessageofthestream(id as string, link);
  };
  const handelclosetheMeeting = async () => {
    await closeMeeting(id as string);
  };

  function randomID(len: any) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  function getUrlParams(url = window.location.href) {
    let urlStr = url.split("?")[1];
    return new URLSearchParams(urlStr);
  }
  const roomID = getUrlParams().get("roomID") || randomID(5);
  let role_str = getUrlParams(window.location.href).get("role") || "Host";
  const role =
    role_str === "Host"
      ? ZegoUIKitPrebuilt.Host
      : role_str === "Cohost"
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks: any = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: "Join as co-host",
      url:
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "/" +
        roomID,
    });
  }
  sharedLinks.push({
    name: "Join as audience",
    url:
      window.location.protocol + "//" + window.location.host + "room/" + roomID,
  });
  //http://localhost:3000/room/547852
  //http://localhost:3000/meet?roomID=lIV8U&role=Audience

  async function init(element: any) {
    const appId = 501103974;
    const serverSecret = "e405c1b30cdf5ea92efbbe098f8a8e54";
    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      "mmmmm",
      v4(),
      "user1"
    );

    const ui = ZegoUIKitPrebuilt.create(KitToken);

    ui.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
        config: {
          role,
        },
      },
      sharedLinks,
    });
  }

  return (
    <div className="w-full max-h-screen flex flex-col">
      <div ref={init} className="flex-grow"></div>
      {theuseristheownerofthemeeting && (
        <div className="flex items-center space-x-2 p-4">
          <Button variant="primary" onClick={sendmessage}>
            Share the meeting
          </Button>

          <Button variant="green" onClick={handelclosetheMeeting}>
            Finish the meeting
          </Button>
        </div>
      )}
    </div>
  );
};

export default SingleRoomPage;

export function NoMeetingFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <GhostIcon className="h-16 w-16 text-muted-foreground" />
      <div className="text-2xl font-semibold text-muted-foreground">
        No meeting found
      </div>
      <div className="text-sm text-muted-foreground">
        This meeting has been finished or not found
      </div>
    </div>
  );
}
export function Noaccestothemeeting() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <GhostIcon className="h-16 w-16 text-muted-foreground" />
      <div className="text-2xl font-semibold text-muted-foreground">
        You do not have access to this meeting
      </div>
      <div className="text-sm text-muted-foreground">
        this meeting is not available for you to join
      </div>
    </div>
  );
}
