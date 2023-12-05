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

export const DELETE_EXPERIENCE_MODAL = "delete experience modal";

const DeleteExperienceModal: FC = () => {
  const { isOpen, payload, closeModal } = useModal(DELETE_EXPERIENCE_MODAL);
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
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteExperienceModal;
