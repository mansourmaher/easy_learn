import Stripe from "stripe";

import {headers} from "next/headers"
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { pusherServer } from "@/lib/pusher";


export async function POST(req:Request):  Promise<void | Response> {{
    console.log("webhook")
    const body=await req.text()
   

    const signature=headers().get("Stripe-Signature") as string
    console.log("signature")

    let event:Stripe.Event
  
        event=stripe.webhooks.constructEvent(body,signature,process.env.STRIPE_WEBHOOK_SECRET!)
    console.log("event")
   
    const session=event.data.object as Stripe.Checkout.Session
    const userId=session?.metadata?.userId
    const courseId=session?.metadata?.courseId
    
    console.log("checkout completed")
    
    if(event.type==="checkout.session.completed"){
        if(!userId || !courseId){
            return new NextResponse(null,{status:400})

        }
        console.log("checkout completed")
        const course=await db.course.findUnique({
            where:{
                id:courseId
            }
        })
    
        await db.courseUser.create({
            data:{
                userId:userId!,
                courseId:courseId!
            }
        })
        await db.course.update({
            where:{
                id:courseId
            },
            data:{
                totalPurchases:{
                    increment:1
                }
            }
        })
        const user=await db.user.findFirst({
            where:{
                id:userId
            },
          
        })
        const notification= await db.notifications.create({
            data:{
                teacher:course?.userId!,
                student:user?.id!,
                message:`${user?.name} has purchased ${course?.title} course`,
                courseId:courseId
            },
            include:{
                user:true,
                studentNotif:true
            }
        })
         await pusherServer.trigger('notification', 'new-notification', {
            notification
        });
    

    }else{
        return new NextResponse(null,{status:401})

    }
    return new NextResponse(null,{status:200})

}}