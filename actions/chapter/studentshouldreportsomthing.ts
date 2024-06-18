"use server"

import { db } from "@/lib/db"



export async function studentShouldreport(id:string)

{
    const chapter=await db.chapter.findFirst({
        where:{
            id
        },
        select:{
            toDo:true
        }
    })
    if(chapter?.toDo)
    {
        return true
    }
    return false
}