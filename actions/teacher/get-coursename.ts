"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"



export async function getMycoursesnames()
{
    const user=await auth()
    const userId=user?.user.id
    const courses=await db.course.findMany({
        where:{
            userId:userId,
            isPublished:true,
            status:"verified"
        },
        select:{
            title:true,
            id:true
        }
    })
    return courses
}