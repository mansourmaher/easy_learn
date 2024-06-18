"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"



export async function isuserpurchasedthecourseconversationId(convId:string)
{
    const user=await auth()
    const userId=user?.user.id
    const conv=await db.conversation.findUnique({
        where:{
            id:convId
        },
        select:{
            courseId:true
        }
    }
)
if(!conv)
    {
        return {error:"No conversation found"}
    }
    const existingpurchase=await db.courseUser.findUnique({
        where:{
            userId_courseId:{
                userId:userId!,
                courseId:conv?.courseId! as string
                
                

            }
        }
    })
    if(existingpurchase)
    {
        return true
    }
    else
    {
        return false
    }

}


export const istheownerofconversation=async (convId:string)=>{
    const user=await auth()
    // const course=await db.course.findFirst({
    //     where:{
    //         userId:user?.user.id,

    //     }
    // })
    // if(!course)
    // {
    //     return {error:"No course found"}
    // }
    // const conv=await db.conversation.findUnique({
    //     where:{
    //         id:convId
    //     }
    // })
    // if(!conv)
    // {
    //     return {error:"No conversation found"}
    // }
    // if(course.id===conv.courseId)
    // {
    //     return true
    // }
    // else
    // {
    //     return false
    // }
    const conversation=await db.conversation.findUnique({
        where:{
            id:convId
        },
        select:{
            courseId:true
        }
    })
    if(!conversation)
    {
        return {error:"No conversation found"}
    }
    const course=await db.course.findFirst({
        where:{
            userId:user?.user.id,
            id:conversation.courseId!
        }
    })
    if(!course)
    {
        return {error:"No course found"}
    }
    return true

}