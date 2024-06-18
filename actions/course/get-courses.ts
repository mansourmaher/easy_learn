"use server"
import { Category, Course } from "@prisma/client";
import { getProgress } from "./get-progress";
import { db } from "@/lib/db";
import { getFivestarscount, getForstarscount, getOnetarscount, getThreestarscount, getTwostarscount } from "./get-stars-number";
import { getCourseRating } from "./get-course-rating";

type CourseWidhProgressWidhCategory = Course &{
    category:Category | null
    chapters:{id:string}[]
    review?:{id:string}[]
    

    
}

type GetCourses={
    
    title:string
    category:string
    teacher:string
    level:string
    price:string

}
export const getCourses=async({
    
    title,
    category,
    teacher,
    level,
    price
    
}:GetCourses):Promise<CourseWidhProgressWidhCategory[]>=>{

    try{
        
        if(price==="all"){
            const courses=await db.course.findMany({
                where:{
                    
                    isPublished:true,
                    status:"verified",
                    title:{
                        contains:title
                        
                    },
                    categoryId:category,
                    user:{
                        name:{
                            contains:teacher
                        }
                    }
                },
                include:{
                   
                    category:true,
                    chapters:{
                        where:{
                            isPublished:true
                        },
                        
                        select:{
                            id:true
                        },
                        
                    },
                    
                    
                  
                },
                orderBy:{
                    createdAt:"desc"
                }
            })
            return courses
        }
        if(price==="free"){
            const courses=await db.course.findMany({
                where:{
                    
                    isPublished:true,
                    status:"verified",
                    title:{
                        contains:title
                        
                    },
                    categoryId:category,
                    user:{
                        name:{
                            contains:teacher
                        }
                    },
                    price:0
                },
                include:{
                   
                    category:true,
                    chapters:{
                        where:{
                            isPublished:true
                        },
                        
                        select:{
                            id:true
                        },
                        
                    },
                    
                    
                  
                },
                orderBy:{
                    createdAt:"desc"
                }
            })
            return courses
        }
        if(price==="paid"){
            const courses=await db.course.findMany({
                where:{
                    
                    isPublished:true,
                    status:"verified",
                    title:{
                        contains:title
                        
                    },
                    categoryId:category,
                    user:{
                        name:{
                            contains:teacher
                        }
                    },
                    price:{
                        not:0
                    }
                },
                include:{
                   
                    category:true,
                    chapters:{
                        where:{
                            isPublished:true
                        },
                        
                        select:{
                            id:true
                        },
                        
                    },
                    
                    
                  
                },
                orderBy:{
                    createdAt:"desc"
                }
            })
            return courses
        }

        
       
       
        const courses=await db.course.findMany({
            where:{
                
                isPublished:true,
                status:"verified",
                title:{
                    contains:title
                    
                },
                categoryId:category,
                user:{
                    name:{
                        contains:teacher
                    }
                }
            },
            include:{
               
                category:true,
                chapters:{
                    where:{
                        isPublished:true
                    },
                    
                    select:{
                        id:true
                    },
                    
                },
                
                
              
            },
            orderBy:{
                createdAt:"desc"
            }
        })

        // const courseIncludeAverageRating=await Promise.all(courses.map(async(course)=>{
        //     const avg=await getCourseRating(course.id)
        //     const totalReviews=course.review.length
        //     return{
        //         ...course,
        //         avg,
        //         totalReviews

        //     }

           
        // }
        
       
        // ))
        // return courseIncludeAverageRating
       
        return courses




    }catch(e){
        console.log("get-courses.ts: Error: ",e)
        return []
    }
}
