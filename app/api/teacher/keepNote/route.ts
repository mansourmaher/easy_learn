
"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"
import { pusherServer } from '@/lib/pusher';
import { revalidatePath } from 'next/cache';



export async function POST(req:Request)
{
    try{
            
            const user=await auth()
            const userId=user?.user.id as string
            const {reportId,grade,note,initilagrade}=await req.json()
           
            const createCompteRendu=await db.report.update({
            where:{
                id:reportId
            },
            data:{
                grade:grade,
                note:note,
                status:"validated"
            }
                
             })
             const allreportforcourse=await db.report.findMany({
                where:{
                    courseId:createCompteRendu.courseId
                },
                select:{
                    grade:true
                }
            })
            const totalgrade=allreportforcourse.reduce((acc,curr)=>acc+curr.grade!,0)

             
             
            
           
             const updatescore=await db.courseUser.update({
                where:{
                    userId_courseId:{
                        courseId:createCompteRendu.courseId,
                        userId:createCompteRendu.userId
                    }
                },
                data:{
                    score:totalgrade
                }
            }
            )
            
                
             const getStudent=await db.report.findFirst({
                    where:{
                        id:reportId
                    },
                    include:{
                        user:true
                    }
                })
            
             const notification=await db.notifications.create({
                data:{
                    teacher:getStudent?.user?.id!,
                    student:userId,
                    message:`${user?.user.name} has submitted your work`,
                    courseId:getStudent?.courseId,
                    chapterId:getStudent?.chapterId,
                }
            })
            
            await pusherServer.trigger('notification', 'new-notification', {
                notification
            });
            revalidatePath('teacher/check')
            return Response.json({message: "The student's work has been successfully submitted. They have been notified."}, { status: 200 });




        }catch(e)
    {
        return  Response.json({message:"Error submitting work"}, { status: 500 });
    }
}