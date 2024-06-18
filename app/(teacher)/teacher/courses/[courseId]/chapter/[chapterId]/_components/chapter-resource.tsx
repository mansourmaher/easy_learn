"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  File,
  ImageIcon,
  Loader2,
  Pencil,
  PlusCircle,
  X,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Attachment, Chapter, Course } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";
import { useUploadThing } from "@/lib/uploadthing";
import Dropzone from "react-dropzone";
import { Progress } from "@/components/ui/progress";
interface AttachementFormProps {
  initialeData: Chapter & { resources: Attachment[] };
  courseId: any;
  chapterId: any;
  onchange?: () => void;
}
const UploadDropzone = ({
  initialeData,
  courseId,
  chapterId,
  onchange,
}: AttachementFormProps) => {
  const [isUploading, setIsUploading] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(false);
  const router = useRouter();
  const { startUpload } = useUploadThing("chapterTodo", {
    onUploadError: (error) => {
      toast.error("Failed to upload file");
      setUploadError(true);
      router.refresh();
      onchange && onchange();
      return;
    },
    onUploadProgress: (progress) => {
      setUploadProgress(progress);
    },
  });
  const [processing, setProcessing] = useState(true);

  return (
    <Dropzone
      onDrop={async (acceptedFiles) => {
        setIsUploading(true);

        const res = await startUpload(acceptedFiles);
        if (res) {
          const values = {
            url: res[0].url,
          };

          await axios
            .post(
              `/api/courses/${courseId}/chapters/${chapterId}/attachement`,
              values
            )

            .then(() => {
              setProcessing(false);
              onchange && onchange();

              router.refresh();

              toast.success(
                "you have successfully added an attachment to your chapter"
              );
            });
        }

        setUploadProgress(100);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <section className={cn(uploadProgress === 100 ? "hidden" : "")}>
          <div
            {...getRootProps()}
            className="border h-64 m-4 border-dashed border-gray-300 rounded-lg"
          >
            <div className="flex items-center justify-center h-full w-full hover:bg-gray-100">
              <label
                htmlFor="file"
                className="flex flex-col items-center justify-center w-full  hover:bg-gray-100  rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Cloud className="h-6 w-6 text-gray-500" />
                  <p className="text-sm text-gray-500">
                    Drag and drop your file here or{" "}
                    <span className="text-primary">browse</span>
                  </p>
                </div>
                {acceptedFiles && acceptedFiles[0] && !uploadError ? (
                  <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outiline outline-[1px] outline-primary">
                    <div className="px-3 py-2 h-4 flex flex-row place-items-center">
                      <File className="h-4 w-4 text-primary" />
                    </div>
                    <div className="px-3 py-2 h-full text-sm truncate">
                      {acceptedFiles[0].name}
                    </div>
                  </div>
                ) : null}
                {uploadError && (
                  <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outiline outline-[1px] outline-red">
                    <div className="px-3 py-2 h-4 flex flex-row place-items-center">
                      <File className="h-4 w-4 text-red" />
                    </div>
                    <div className="px-3 py-2 h-full text-sm truncate">
                      Error uploading file
                    </div>
                  </div>
                )}

                {isUploading && !uploadError ? (
                  <div className="w-full mt-4 max-w-xs mx-auto ">
                    <Progress
                      value={uploadProgress}
                      className={cn(
                        "h-1",
                        uploadProgress === 100 ? "bg-primary" : "bg-gray-300"
                      )}
                    />
                    <span className="items-center justify-center flex mt-2 text-gray-500">
                      {uploadProgress === 100 && processing ? (
                        <div className=" flex gap-x-2">
                          <p>Uploading</p>
                        </div>
                      ) : (
                        <p>{uploadProgress}% Uploaded </p>
                      )}
                    </span>
                  </div>
                ) : null}
              </label>
              <input {...getInputProps()} />
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

const formSchema = z.object({
  url: z.string().min(1, {
    message: "Please enter a url",
  }),
});

export const AttachementFormChapter = ({
  initialeData,
  courseId,
  chapterId,
}: AttachementFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);

      // Clear any previous error messages
      toast.dismiss();
      console.log("values " + JSON.stringify(values));

      await axios.post(
        `/api/courses/${courseId}/chapters/${chapterId}/attachement`,
        values
      );

      toast.success("Attachment added");
      toggleEditing();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false); // Set loading to false whether successful or not
    }
  };

  const ondelete = async (attachemntId: string) => {
    try {
      setDeletingId(attachemntId);
      await axios.delete(
        `/api/courses/${courseId}/chapters/${chapterId}/attachement/${attachemntId}`
      );
      toast.success("Attachment deleted");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4 ">
      <div className="font-medium flex items-center justify-between">
        <div className="">
          Add resources to your chapter
          {isEditing && (
            <p className="text-sm text-slate-400">
              *Note: The file should be in pdf format any other format will not
              be accepted.
            </p>
          )}
        </div>
        <Button variant="ghost" onClick={toggleEditing}>
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add resources
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          <>
            {initialeData.resources?.length === 0 && (
              <p className="text-sm mt-2 text-slate-500 italic">
                No attachment
              </p>
            )}
            {initialeData?.resources?.length > 0 && (
              <ul className="mt-2">
                {initialeData.resources.map((attachment) => (
                  <li
                    key={attachment.id}
                    className="flex items-center space-x-2"
                  >
                    <File className="h-4 w-4" />
                    <a
                      href={attachment.url}
                      target="_blank"
                      className="text-sm text-slate-500 line-clamp-1"
                    >
                      {attachment.url}
                    </a>
                    {deletingId == attachment.id && (
                      <div>
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    )}
                    {deletingId !== attachment.id && (
                      <button
                        onClick={() => ondelete(attachment.id)}
                        className="ml-auto hover:opacity-75 transition"
                      >
                        <X className="h-4 w-4"></X>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </>
        </>
      )}
      {isEditing && (
        <div>
          <UploadDropzone
            initialeData={initialeData}
            courseId={courseId}
            chapterId={chapterId}
          />

          <div className="text-xs text-gray-500 mt-2">
            Add attachment to your course
          </div>
          {isLoading && (
            <div className="mt-2 flex items-center">
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              <span>Saving attachment...</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
