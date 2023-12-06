"use client";
import { FC } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/AlertDialog";
import { useModal } from "@/hooks/useModal";
import { TExperience } from "@/lib/validators/experience";
import { deleteExperienceAction } from "@/actions/experience";
import { useToast } from "@/hooks/useToast";

export const DELETE_EXPERIENCE_MODAL = "delete experience modal";

const DeleteExperienceModal: FC = () => {
  const { isOpen, payload, closeModal } = useModal(DELETE_EXPERIENCE_MODAL);
  const { toast } = useToast();

  const handleDeletingExperience = async () => {
    const res = await deleteExperienceAction((payload as TExperience)?.id);
    if (res && res.ok) {
      closeModal();
      toast({
        title: `Your experience has been successfully deleted`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Operation Failed",
        description: res.error,
      });
    }
  };
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure, You want delete this experience in{" "}
            {(payload as TExperience)?.companyName}?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeletingExperience}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteExperienceModal;
