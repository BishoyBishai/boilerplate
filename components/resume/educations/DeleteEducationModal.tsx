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
import { TEducation } from "@/lib/validators/education";
import { deleteEducationAction } from "@/actions/education";
import { useToast } from "@/hooks/useToast";

export const DELETE_EDUCATION_MODAL = "delete education modal";

const DeleteEducationModal: FC = () => {
  const { isOpen, payload, closeModal } = useModal(DELETE_EDUCATION_MODAL);
  const { toast } = useToast();

  const handleDeletingEducation = async () => {
    const res = await deleteEducationAction((payload as TEducation)?.id);
    if (res && res.ok) {
      closeModal();
      toast({
        title: `Your education has been successfully deleted`,
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
            Are you sure, You want delete this education in{" "}
            {(payload as TEducation)?.companyName}?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeletingEducation}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteEducationModal;
