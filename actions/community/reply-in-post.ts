"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


export async function replyInPost(comunityId:string,postId: string, message: string,imageUrl:string | null) {
    const user=await auth()
    const userId=user?.user.id
   await db.postResponse.create({
    data:{
      content:message,
      postId:postId,
      userId:userId!,
      imageurl:imageUrl
     
    }
  })
  return revalidatePath(`/community/${comunityId}`)
}