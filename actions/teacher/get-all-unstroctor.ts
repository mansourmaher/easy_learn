"use server"

import { db } from "@/lib/db";
import { getTeacherRating } from "./get-teacher-rating";
import { getCoursesCountByTeacher, getTeacherReviewCount } from "../course/get-courses-count-by-teacher";
import { getTotalPurchaseByteacherId } from "./get-total-purchase";
import { getCountUserInEachCourse } from "./get-count-user-in-each-course";




export async function getAllUnstroctor(name:string | null){

    const teachers=await db.course.findMany({
           distinct:["userId"],
        //   where:{
        //     isPublished:true
        //   },
        
        include:{
            
            user:{
                
                where:{
                    
                    name:{
                        contains:name||""
                    }
                },
                
                select:{
                    
                    name:true,
                    id:true,
                    image:true,
                    subtitle:true,
                    email: true,
                    createdAt:true,
                    about:true
                }
            },
            review:true
            
        }
    })
    const filterdTeacher = teachers.filter((teacher) => teacher.user !== null);
    
    const teachersWithAvg=await Promise.all(filterdTeacher.map(async teacher=>{
        const avg=await getTeacherRating(teacher.userId)
        const totalReviews=await getTeacherReviewCount(teacher.userId)
        const totlacourse=await getCoursesCountByTeacher(teacher.userId)
        const totlaPurchase=await getTotalPurchaseByteacherId(teacher.userId)

        
        return {...teacher,avg,totalReviews,totlacourse,totlaPurchase}
    })
    )
    const sortedTeachers=teachersWithAvg.sort((a,b)=>b.avg-a.avg)
    
    return sortedTeachers
    
   
    
    
}
interface GetTeacher {
    teacher: string;
    country: string;
    field: string;
    orderby: string;
  }

export async function getAllteachers({teacher,country,field,orderby}:GetTeacher)
{
    if(orderby==="Rating" || !orderby){
    
        const teachers=await db.user.findMany({
            where:{
                role:"TEACHER",
                name:{
                    contains:teacher||""
                },
                origin:{
                    label:{
                        contains:country||""
                    
                    }
                },
                filier:{
                    contains:field||""
                
                },

                teacherAccess:true
                

            },
            select:{
                name:true,
                id:true,
                image:true,
                subtitle:true,
                email: true,
                createdAt:true,
                about:true,
                origin:true,
                
            }
        })
        
        const teacherwithcoursecountandreviewandratingandstudents=await Promise.all(teachers.map(async teacher=>{
            const avg=await getTeacherRating(teacher.id)
            const totalReviews=await getTeacherReviewCount(teacher.id)
            const totlacourse=await getCoursesCountByTeacher(teacher.id)
            const totlaPurchase=await getTotalPurchaseByteacherId(teacher.id)
            const students = await getCountUserInEachCourse(teacher.id);
            return {...teacher,avg,totalReviews,totlacourse,totlaPurchase,students}

        }))
        
        const sortedTeachers=teacherwithcoursecountandreviewandratingandstudents.sort((a,b)=>b.avg-a.avg)
        return sortedTeachers
    }
    else if(orderby==="Total students"){
        const teachers=await db.user.findMany({
            where:{
                role:"TEACHER",
                name:{
                    contains:teacher||""
                },
                origin:{
                    label:{
                        contains:country||""
                    
                    }
                },
                filier:{
                    contains:field||""
                
                },
                teacherAccess:true
            },
            select:{
                name:true,
                id:true,
                image:true,
                subtitle:true,
                email: true,
                createdAt:true,
                about:true,
                origin:true,
            }
        })
        
        const teacherwithcoursecountandreviewandratingandstudents=await Promise.all(teachers.map(async teacher=>{
            const avg=await getTeacherRating(teacher.id)
            const totalReviews=await getTeacherReviewCount(teacher.id)
            const totlacourse=await getCoursesCountByTeacher(teacher.id)
            const totlaPurchase=await getTotalPurchaseByteacherId(teacher.id)
            const students = await getCountUserInEachCourse(teacher.id);
            return {...teacher,avg,totalReviews,totlacourse,totlaPurchase,students}

        }))
        
        const sortedTeachers=teacherwithcoursecountandreviewandratingandstudents.sort((a,b)=>b.students-a.students)
        return sortedTeachers
    }
    else if(orderby==="Experience"){
        const teachers=await db.user.findMany({
            where:{
                role:"TEACHER",
                name:{
                    contains:teacher||""
                },
                origin:{
                    label:{
                        contains:country||""
                    
                    }
                },
                filier:{
                    contains:field||""
                
                },
                teacherAccess:true
            },
            select:{
                name:true,
                id:true,
                image:true,
                subtitle:true,
                email: true,
                createdAt:true,
                about:true,
                origin:true,
            },
            orderBy:{
                createdAt:"asc"
            }
        })
        
        const teacherwithcoursecountandreviewandratingandstudents=await Promise.all(teachers.map(async teacher=>{
            const avg=await getTeacherRating(teacher.id)
            const totalReviews=await getTeacherReviewCount(teacher.id)
            const totlacourse=await getCoursesCountByTeacher(teacher.id)
            const totlaPurchase=await getTotalPurchaseByteacherId(teacher.id)
            const students = await getCountUserInEachCourse(teacher.id);
            return {...teacher,avg,totalReviews,totlacourse,totlaPurchase,students}

        }))
        
        return teacherwithcoursecountandreviewandratingandstudents
    }


    
   

}


// //  const getCourseCount = async () => {
//     const count = await getCoursesCountByTeacher(course!.userId!);
//     setTotalCourse(count);
//   };
//   const getreviewCount = async () => {
//     const count = await getTeacherReviewCount(course!.userId!);
//     setTotalReview(count);
//   };
//   const getRating = async () => {
//     const rating = await getTeacherRating(course!.userId!);
//     setTeacherRating(rating);

//     const students = await getCountUserInEachCourse(course!.userId!);
//     setTotalStudent(students);
//   };


    