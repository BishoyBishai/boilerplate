"use client";
import { InputForm } from "@/components/form";
import { Button } from "@/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/useToast";
import {
  TEducation,
  TEducationForm,
  educationValidationSchema,
} from "@/lib/validators/education";
import { FORM_TYPE, TForm } from "@/models/forms";
import { addEducationAction, updateEducationAction } from "@/actions/education";
import { useModal } from "@/hooks/useModal";
import { EDUCATION_MODAL } from "./EducationModal";
import { Loader2 } from "lucide-react";

export default function EducationForm({
  type,
  data: education,
}: TForm<TEducation>) {
  /*
   * Register LoginForm using react-hook-form
   */
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<TEducation>({
    resolver: zodResolver(educationValidationSchema),
    mode: "onBlur",
    defaultValues: education,
  });

  const { toast } = useToast();

  const { closeModal } = useModal(EDUCATION_MODAL);

  const handleSubmitEducationForm = async (values: TEducationForm) => {
    const res =
      type === FORM_TYPE.create
        ? await addEducationAction(JSON.stringify(values))
        : await updateEducationAction(education.id!, JSON.stringify(values));
    if (res && res.ok) {
      closeModal();
      toast({
        title: `Your education has been successfully ${
          type === FORM_TYPE.create ? "added" : "updated"
        }`,
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
    <div className="grid gap-2 w-full p-x-6 ">
      <form onSubmit={handleSubmit(handleSubmitEducationForm)}>
        <div className="w-full md:flex justify-between items-end gap-16">
          <div className="flex-1">
            <InputForm
              label="Institute name"
              register={register("instituteName")}
              error={errors.instituteName}
            />
            <InputForm
              label="Subject"
              register={register("subject")}
              error={errors.subject}
            />
          </div>

          <div className="">
            <InputForm
              label="Study From"
              register={register("studyFrom")}
              error={errors.studyFrom}
            />
            <InputForm
              label="Study To"
              register={register("studyTo")}
              error={errors.studyTo}
            />
            <InputForm
              label="Location"
              register={register("location")}
              error={errors.location}
            />
          </div>
        </div>

        <div className="flex gap-2 pt-4 flex-row-reverse">
          <Button disabled={!isValid || isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {type === FORM_TYPE.create ? "Add a new" : "Update your"} education
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
