"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"



export async function fetchSometeacherReveiwforme()
{
    try{
        const user=await auth()
        const userId=user?.user.id
        const myuploadedwork=await db.report.findMany({
            where:{
                userId,
                status:"validated"
            },
            select:{
                status:true,
                work:true,
                workUrl:true,
                grade:true,
                note:true,
                createdAt:true,
                updatedAt:true,
                chapter:{
                    select:{
                        title:true
                    }
                },
                course:{
                    select:{
                        title:true,
                        userId:true
                    }
                }

                
                
            }
        })
        const eachuploadedworkwiththeteacher=await Promise.all(myuploadedwork.map(async (work)=>{
            const teacher=await db.user.findUnique({
                where:{
                    id:work.course.userId
                },
                select:{
                    name:true,
                    email:true,
                    image:true
                }
            })
            return {...work,teacher:teacher?.name,teacheremail:teacher?.email,teacherimage:teacher?.image}
        }
        ))
        return eachuploadedworkwiththeteacher

    }catch(e)
    {
        console.error(e)
    }
}
// model Report {
//   id String @id @default(uuid())

//   courseId String
//   course   Course @relation(fields: [courseId], references: [id])
//   userId   String

//   user      User    @relation(fields: [userId], references: [id])
//   chapterId String
//   chapter   Chapter @relation(fields: [chapterId], references: [id])
//   work      String?
//   workUrl   String?
//   grade     Float?
//   note      String?
//   status    String  @default("pending")

//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
// }