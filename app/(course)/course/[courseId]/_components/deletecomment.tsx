import { deletecomment } from "@/actions/Etudiant/delete-comment";
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

export function DeleteCommentCompoenents({ id }: RatingProps) {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = React.useState(false);
  const handelDeleteComment = async () => {
    setIsDisabled(true);
    await deletecomment(id);
    router.refresh();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm">
          <div className="flex gap-x-2 p-2">
            <Trash className="h-4 w-4 text-red-400" />
          </div>
        </Button>
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
            onClick={handelDeleteComment}
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
