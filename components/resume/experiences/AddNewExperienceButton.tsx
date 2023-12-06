"use client";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/hooks/useModal";
import { EXPERIENCE_MODAL } from "./ExperienceModal";
import { ListPlus } from "lucide-react";

export default function AddNewExperienceButton() {
  const { openModal } = useModal(EXPERIENCE_MODAL);
  const handleOpenCreateNewExperienceModal = () => {
    openModal();
  };
  return (
    <Button variant="outline" onClick={handleOpenCreateNewExperienceModal}>
      <ListPlus className="mr-2 h-4 w-4" />
      Add more experience
    </Button>
  );
}
