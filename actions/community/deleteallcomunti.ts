"use server"

import { db } from "@/lib/db"



export async function deleteallcomunty()
{
   try{
    await db.post.deleteMany()
    await db.community.deleteMany()
    return "deleted"
   }catch(e){
       console.log(e)
       return "error"
   }

}