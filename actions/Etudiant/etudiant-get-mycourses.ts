import { Course } from '@prisma/client';
"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"
import { getProgress } from "../course/get-progress"


export async function etudiantgetycourses()
{
    const user=await auth()
    const userId=user?.user.id
    const courses=await db.courseUser.findMany({
        where:{
            course:{
               
            },
            user:{
                id:userId
            }
            
        },
        include:{
            course:{
                select:{
                    id:true,
                    title:true,
                    description:true,
                    chapters:{
                        where:{
                            isPublished:true
                        }
                    },
                    imageUrl:true
                }
            }
               
              
        }
    })
    const coursesIncludeProgresse=await Promise.all(courses.map(async(course)=>{
        const progress=await getProgress(userId!,course.courseId)
        return {
            ...course,
            progress
        }
    }
    ))
    
    return coursesIncludeProgresse
}


export async function getThelastcoursethathaveprogressIn()
{
    const user=await auth()
    const userId=user?.user.id
    const userProgress=await db.userProgress.findMany({
        where:{
            userId
        },
        orderBy:{
            createdAt:"desc"
        },
        take:1,
        select:{
            
            chapter:true
        }
    })
    if(userProgress.length==0)
    {
        return null
    }
    const course=await db.chapter.findFirst({
        where:{
            id:userProgress[0].chapter.id
        },
        select:{
            courseId:true,
            position:true
            
        }
    })
    const courseInfo=await db.course.findFirst({
        where:{
            id:course?.courseId
        },
        select:{
            id:true,
            title:true,
            description:true,
            imageUrl:true
        }
    })
    const courseUser=await db.courseUser.findFirst({
        where:{
            courseId:courseInfo?.id,
            userId
        },
        select:{
            status:true
        }
    })
   
    const thenextChapter=await db.chapter.findFirst({
        where:{
            courseId:courseInfo?.id,
            position:course?.position!+1
        }
    })
    if(!thenextChapter)
        {
            const thenextChapter=await db.chapter.findFirst({
                where:{
                    courseId:courseInfo?.id,
                    position:course?.position!
                }
            })
            return {
                courseInfo,
                thenextChapter
            }

        }
    

        
    return {
        courseInfo,
        thenextChapter
    }





}