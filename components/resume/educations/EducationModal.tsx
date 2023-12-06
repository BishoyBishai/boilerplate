"use client";
import { FC } from "react";
import { useModal } from "@/hooks/useModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import EducationForm from "./EducationForm";
import { FORM_TYPE } from "@/models/forms";

export const EDUCATION_MODAL = "create and update education modal";

const EducationModal: FC = () => {
  const { isOpen, payload, closeModal } = useModal(EDUCATION_MODAL);

  // close modal on click on x button
  const handleSelfClose = (open: boolean) => {
    !open && closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleSelfClose}>
      <DialogContent className="sm:max-w-[70%] max-md:max-h-full max-md:top-[45%] overflow-scroll border-red-100">
        <DialogHeader>
          <DialogTitle>
            {payload
              ? "Update your education"
              : "Let's add a new education to your list"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <EducationForm
            data={payload}
            type={payload ? FORM_TYPE.update : FORM_TYPE.create}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationModal;
