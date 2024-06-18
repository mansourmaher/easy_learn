"use server";

import { db } from "@/lib/db";

export async function closeMeeting(meetingId: string) {
  return await db.meeting.deleteMany({
    where: {
      link: meetingId,
    },
  });
}
