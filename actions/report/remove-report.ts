"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"



export async function removeReportChapter(reportId:string,courseId:string) {
    try {
        const existingreport=await db.report.findUnique({
            where:{
                id:reportId
            }
        })
        if(!existingreport)
        {
            return "report not found"
        }
        await db.courseUser.update({
            where:{
                userId_courseId:{
                    courseId:courseId,
                    userId:existingreport.userId
                
                }
            },
            data:{
                score:{
                    decrement:existingreport.grade? existingreport.grade:0
                }
            
            }
        })
        await db.report.delete({
            where:{
                id:reportId
            }
        })
        

    }catch(e){
        return e
    }
}
