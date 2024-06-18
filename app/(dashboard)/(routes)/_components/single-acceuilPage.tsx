import { auth } from "@/auth";
import React from "react";
import CourseStudentList from "./course-students-list";
import Fedbacktoast from "@/components/feedback-toast";

const SingleAcceuilPage = async () => {
  
  return (
    <div className="">
      <div className="">
        <CourseStudentList />
      </div>
    </div>
  );
};

export default SingleAcceuilPage;
