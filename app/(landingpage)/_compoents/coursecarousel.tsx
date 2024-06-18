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

interface SingleUnstructorsPageProps {
  teachers: Awaited<ReturnType<typeof getAllUnstroctor>>;
}

function CourseCarousel({ teachers }: SingleUnstructorsPageProps) {
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
    <>
      <Carousel plugins={[plugin.current]} className="w-full " setApi={setApi}>
        <CarouselContent className="py-14">
          {teachers.map((teacher, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/5 "
              onClick={() => {
                api?.scrollTo(index);
              }}
            >
              <div className="p-1">
                <Card
                  className={cn(
                    current + 1 === index
                      ? "shadow-xl scale-125 transform transition-transform  z-10 mx-4 mt-4"
                      : "opacity-50"
                  )}
                  onClick={() => {
                    api?.scrollTo(index);
                  }}
                >
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <CarouselCardItem teacher={teacher} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center space-x-2 mt-4">
        {teachers.map((teacher, index) => (
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
    </>
  );
}

export default CourseCarousel;
