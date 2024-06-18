import { getCourses } from '@/actions/course/get-courses';
import React from 'react'


interface CourseItemProps {
    course: Awaited<ReturnType<typeof getCourses>>[0]
    }

function CourseItem() {
  return (
    <div>CourseItem</div>
  )
}

export default CourseItem