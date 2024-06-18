"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"



export async function studenthasaccestomeet(id:string)
{
    const user=await auth()
    const userId=user?.user.id
    if(!userId)
    {
        console.log("the user is not authenticated")
        return false
    }
    const existingmeet=await db.meeting.findFirst({
        where:{
            link:id
        },
        select:{
            link:true,
        }
    })
    if(!existingmeet)
    {
        console.log("the meeting does not exist")
        return false
    }
    const isthetheusertheownerofthecourse=await db.course.findFirst({
        where:{
            id:existingmeet.link,
            userId
        }
    })
    if(isthetheusertheownerofthecourse)
    {
        console.log("the user is the owner of the course")
        return true
    }

    const courseuser=await db.courseUser.findFirst({
        where:{
            
                courseId:existingmeet.link,
                userId
            }

        }
    )
    if(courseuser)
    {
        return true
    }
    console.log("the user is not the owner of the course and he did not buy the course")
    return false
    
}