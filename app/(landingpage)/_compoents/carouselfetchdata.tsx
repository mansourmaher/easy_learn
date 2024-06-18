import { getAllUnstroctor } from "@/actions/teacher/get-all-unstroctor";
import React from "react";
import CourseCarousel from "./coursecarousel";

export const CarouselFetchDta = async () => {
  const teachers = await getAllUnstroctor("");

  return (
    <>
      <CourseCarousel teachers={teachers} />
    </>
  );
};

export default CarouselFetchDta;
