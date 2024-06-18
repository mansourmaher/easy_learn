"use server"

import { db } from "@/lib/db"



export async function handledelepost(postId: string) {
  try{

    const postresponse=await db.postResponse.deleteMany({
        where:{
            postId:postId
        }
    })
    const post=await db.post.delete({
        where:{
            id:postId
        }
    })
    

  }catch(e){
    console.log(e)
  }
}

export  async function  handeldelteresponse(responseId: string)  {
    try{
        const response=await db.postResponse.delete({
            where:{
                id:responseId
            }
        })
    }catch(e){
        console.log(e)
    }
    }