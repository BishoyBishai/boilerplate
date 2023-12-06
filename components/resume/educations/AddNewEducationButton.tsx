"use client";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/hooks/useModal";
import { EDUCATION_MODAL } from "./EducationModal";
import { ListPlus } from "lucide-react";

export default function AddNewEducationButton() {
  const { openModal } = useModal(EDUCATION_MODAL);
  const handleOpenCreateNewEducationModal = () => {
    openModal();
  };
  return (
    <Button variant="outline" onClick={handleOpenCreateNewEducationModal}>
      <ListPlus className="mr-2 h-4 w-4" />
      Add more education
    </Button>
  );
}
