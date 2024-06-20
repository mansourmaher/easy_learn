import { deletecomment } from "@/actions/Etudiant/delete-comment";
import { handeldelteresponse, handledelepost } from "@/actions/community/handeldeltepost";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface RatingProps {
  id: string;
}

export function DeletCommentinForums({ id }: RatingProps) {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = React.useState(false);
  const hadneldeleteresponse = async () => {
    await handledelepost(id);
    router.refresh();
    // delete response
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div
          className="text-xs text-gray-500 cursor-pointer"
          onClick={() => hadneldeleteresponse()}
        >
          Delete
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            comment.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            type="button"
            onClick={hadneldeleteresponse}
            className="text-white bg-red-500 hover:bg-red-600"
            disabled={isDisabled}
          >
            {isDisabled ? (
              <Loader size="20" className="animate-spin" />
            ) : (
              "Delete"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
