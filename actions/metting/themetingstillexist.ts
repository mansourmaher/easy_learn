"use server"

import { db } from "@/lib/db"



export async function themettingStillexist(id:string)
{
    const meet=await db.meeting.findFirst({
        where:{
            link:id,
            status:'active'
        }
    })
    if(meet)
    {
        return true
    }
    else{
        return false
    }
}