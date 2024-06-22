"use server";

import { db } from "@/lib/db";

export async function getTotalStudents() {
  const users = await db.user.findMany({
    where: {
      role: "STUDENT",
    },
  });
  return users.length;
}

export async function getTotalTecaher() {
  const users = await db.user.findMany({
    where: {
      role: "TEACHER",
    },
  });
  return users.length;
}

export async function getTotalSubscrption() {
  const courseusers = await db.courseUser.findMany();
  return courseusers.length;
}
