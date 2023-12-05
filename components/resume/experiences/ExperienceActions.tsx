"use client";
import { FC } from "react";
import { Button } from "../../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/DropdownMenu";
import { MoreVertical } from "lucide-react";
import { TExperience } from "@/lib/validators/experience";
import { useModal } from "@/hooks/useModal";
import { DELETE_EXPERIENCE_MODAL } from "./DeleteExperienceModal";
import { EXPERIENCE_MODAL } from "./ExperienceModal";

interface IExperienceActionsProps {
  experience: TExperience;
}

const ExperienceActions: FC<IExperienceActionsProps> = ({ experience }) => {
  const { openModal: openDeleteExperienceAlert } = useModal(
    DELETE_EXPERIENCE_MODAL
  );
  const { openModal: openUpdateExperienceModal } = useModal(EXPERIENCE_MODAL);

  const handleDeleteExperienceAlert = () => {
    openDeleteExperienceAlert(experience);
  };
  const handleUpdateExperienceModal = () => {
    openUpdateExperienceModal(experience);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={handleUpdateExperienceModal}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDeleteExperienceAlert}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ExperienceActions;
