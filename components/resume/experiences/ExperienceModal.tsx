"use client";
import { FC } from "react";
import { useModal } from "@/hooks/useModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import ExperienceForm from "./ExperienceForm";

export const EXPERIENCE_MODAL = "create and update experience modal";

const ExperienceModal: FC = () => {
  const { isOpen, payload, closeModal } = useModal(EXPERIENCE_MODAL);

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
              ? "Update your experience"
              : "Let's add a new experience to your list"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <ExperienceForm
            experience={payload}
            formType={payload ? "update" : "create"}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceModal;
