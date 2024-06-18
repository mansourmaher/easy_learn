"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import CarouselCardItem from "./carouselcarditem";
import { getAllUnstroctor } from "@/actions/teacher/get-all-unstroctor";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { getCourses } from "@/actions/course/get-courses";
import Image from "next/image";
import ReviewProgress from "@/app/(course)/course/[courseId]/_components/course-review-progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, DollarSign, Eye } from "lucide-react";
import Link from "next/link";
import PurchaseButton from "@/app/(dashboard)/(routes)/search/_components/purchase-course-btn";

interface SingleUnstructorsPageProps {
  courses: Awaited<ReturnType<typeof getCourses>>;
}

function Listofcourseswithcarousel({ courses }: SingleUnstructorsPageProps) {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, current]);

  return (
    <div className=" ">
      <Carousel plugins={[plugin.current]} className="w-full " setApi={setApi}>
        <CarouselContent className="py-14">
          {courses.map((course, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/4 "
              onClick={() => {
                api?.scrollTo(index);
              }}
            >
              <div className=" max-w-full md:p-1">
                <div className="p-4 bg-white flex flex-col border rounded-lg">
                  <div className="relative w-full aspect-video rounded-xl mb-4">
                    <Image
                      className=" w-full object-cover rounded-xl"
                      src={course.imageUrl!}
                      alt="Course Image"
                      fill
                      loading="lazy"
                    />
                  </div>
                  <hr className="border-t border-muted-foreground mb-2" />

                  <h1 className="text-lg font-semibold">{course.title}</h1>
                  <p className="text-sm text-muted-foreground mt-1.5  line-clamp-3 h-14 mb-6">
                    {course.description}
                  </p>
                  <div className="px-2">
                    <ReviewProgress
                      courseId={course.id}
                      avg={course.totalStars! / course.totalReviews!}
                      totalReviews={course.totalReviews!}
                      isForCard={true}
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center md:flex-cols-3 sm:flex-cols-3 ">
                    <div className="flex ">
                      <Badge variant="yellow" className="m-2">
                        {course.category?.name}
                      </Badge>
                    </div>
                    <div className=" -mx-1">
                      <Badge variant="outline">
                        <BookOpen size={14} className="mr-2" />
                        {course.chapters.length} chapters
                      </Badge>
                    </div>
                    <Badge variant="primary">
                      <DollarSign size={14} className="mr-2" />
                      {course.price} D
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="mt-6 ">
                      <Button variant={"primary"}>
                        <Link
                          href={`/course/${course.id}`}
                          className="flex items-center gap-x-3 "
                        >
                          <Eye size={18} /> View Course
                        </Link>
                      </Button>
                    </div>
                    {/* <div className="mt-6 ">
                      <PurchaseButton
                        courseId={course.id}
                        existingpurchase={existingpurchase}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center space-x-2 mt-4">
        {courses.map((teacher, index) => (
          <input
            type="radio"
            key={index}
            className="h-4 w-4 rounded-full text-blue-400 bg-blue-400"
            checked={current === index + 1}
            onChange={() => {
              setCurrent(index + 1);

              api?.scrollTo(index);
            }}
          ></input>
        ))}
      </div>
    </div>
  );
}

export default Listofcourseswithcarousel;
