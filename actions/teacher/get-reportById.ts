"use server"

import { db } from "@/lib/db"


export async function getReportById(id:string)
{
    
        const report = await db.report.findUnique({
            where:{
                id:id
            },
            select:{
                grade:true,
                note:true,
            }
        })
        return report


}