"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { db } from "@/lib/db";
import { getCourseUser } from "@/actions/system/get-courseUser";
import Image from "next/image";
import { format } from "date-fns";
import { BiCertification } from "react-icons/bi";
import { Logo } from "@/app/(dashboard)/_components/logo";

interface CertifModalProps {
  courseUser: Awaited<ReturnType<typeof getCourseUser>>;
}

export default function CertifModal({ courseUser }: CertifModalProps) {
  const ref = useRef(null);

  const handelDownload = () => {
    html2canvas(ref.current!).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", [1000, 670]);
      pdf.addImage(imageData, "PNG", 0, 0, 1000, 667);
      pdf.save("download.pdf");
    });
  };

  const getNemberofdaybetween = (date1: Date, date2: Date) => {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    const number = diffInMs / (1000 * 60 * 60 * 24);
    return Math.floor(number);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className=" text-white bg-green-400 px-1 py-1 rounded-md cursor-pointer flex items-center space-x-2">
                  <BiCertification size="18" /> <span>Certificate</span>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Click to download your certificate
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DialogTrigger>

        <div>
          <DialogContent className="max-w-5xl max-h-7xl w-full mt-0">
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Click to download your certificate
                    </p>
                  </TooltipContent>
                  <TooltipTrigger>
                    {" "}
                    <div ref={ref} onClick={handelDownload}>
                      <div className="flex justify-center items-center max-w-5xl   ">
                        <img
                          src="/cadre.jpg"
                          className="w-full h-full object-cover"
                          alt="first"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex justify-center items-center ">
                        <div className="">
                          <h1 className="text-3xl font-bold text-center mt-12">
                            CERTIFICATE OF APPRECIATION
                          </h1>
                          <p className="text-center mt-4">
                            This certificate is proudly presented to
                          </p>
                          <h2 className="text-xl font-semibold text-center my-4 text-blue-400">
                            {courseUser?.user?.name || ""}
                          </h2>
                          <p className="text-center text-sm">
                            We confirms that{" "}
                            <span className="text-blue-400 text-xl font-semibold my-1">
                              {courseUser?.user?.name}
                            </span>{" "}
                            has successfully completed{" "}
                            {getNemberofdaybetween(
                              courseUser?.createdAt!,
                              new Date()
                            )}{" "}
                            Day of{" "}
                            <span className="text-blue-400 text-xl font-semibold my-1">
                              {courseUser?.course.title}
                            </span>
                          </p>
                          <div className="flex justify-between items-center mt-8">
                            <div className="flex flex-col items-center">
                              <span className="text-sm mt-2">
                                {format(
                                  courseUser?.createdAt || new Date(),
                                  "dd/MM/yyyy"
                                )}
                              </span>
                              <hr className="w-32 border-t-2 border-zinc-300 mt-6" />
                              <span className="text-sm">Start Date </span>
                            </div>
                            <div>
                              <Logo />
                            </div>
                            <div className="flex flex-col items-center">
                              <Image
                                src="/sig2.jpg"
                                alt="logo"
                                width={100}
                                height={50}
                                className=""
                              />
                              <hr className="w-32 border-t-2 border-zinc-300" />

                              <span className="text-sm">Signature</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center max-w-5xl   ">
                        <img
                          src="/louta.png"
                          className="w-full h-full object-cover"
                          alt="first"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            </>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
