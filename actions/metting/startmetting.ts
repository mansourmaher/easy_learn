import { Notifications } from '@prisma/client';
"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"
import { pusherServer } from '@/lib/pusher';




export async function startMeeting(title:string,desscreption:string)
{
    const user=await auth()
    const userId=user?.user.id

    const meet= await db.meeting.create({
        data:{
            title:title,
            description:desscreption,
            userId:userId!,
            link:""
        }
    })
    return meet

}

export async function startprivatecoursemeting(id:string)
{
    const user=await auth()
    const userId=user?.user.id

    const meet= await db.meeting.create({
        data:{
            title:id,
            description:id,
            userId:userId!,
            link:id
        }
    })
    const courseowner=await db.course.findFirst({
        where:{
            id:id
        },
        select:{
            user:true,
            title:true
        }
    })
    const usersshouldbenotified=await db.courseUser.findMany({
        where:{
            courseId:id
        },
        select:{
            userId:true
        }
    })
    usersshouldbenotified.forEach(async (element) => {
        const notification= await db.notifications.create({
            data:{
                teacher:element.userId,
                student:user?.user.id as string,
                message:`${user?.user.name} has started a meeting for ${courseowner?.title} course`,
                distination:meet.link,
            },
            include:{
                user:true,
                studentNotif:true
            }
        })
       
         await pusherServer.trigger('notification', 'new-notification', {
            notification
        });
    });
  

    return meet

}