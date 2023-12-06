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
import { TEducation } from "@/lib/validators/education";
import { useModal } from "@/hooks/useModal";
import { DELETE_EDUCATION_MODAL } from "./DeleteEducationModal";
import { EDUCATION_MODAL } from "./EducationModal";

interface IEducationActionsProps {
  education: TEducation;
}

const EducationActions: FC<IEducationActionsProps> = ({ education }) => {
  const { openModal: openDeleteEducationAlert } = useModal(
    DELETE_EDUCATION_MODAL
  );
  const { openModal: openUpdateEducationModal } = useModal(EDUCATION_MODAL);

  const handleDeleteEducationAlert = () => {
    openDeleteEducationAlert(education);
  };
  const handleUpdateEducationModal = () => {
    openUpdateEducationModal(education);
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
          <DropdownMenuItem onClick={handleUpdateEducationModal}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDeleteEducationAlert}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default EducationActions;
