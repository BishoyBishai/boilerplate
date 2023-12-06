"use client";
import { InputForm, TextareaForm } from "@/components/form";
import { Button } from "@/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/useToast";
import {
  TExperience,
  TExperienceForm,
  experienceValidationSchema,
} from "@/lib/validators/experience";
import { FORM_TYPE, TForm } from "@/models/forms";
import {
  addExperienceAction,
  updateExperienceAction,
} from "@/actions/experience";
import { useModal } from "@/hooks/useModal";
import { EXPERIENCE_MODAL } from "./ExperienceModal";

export default function ExperienceForm({
  type,
  data: experience,
}: TForm<TExperience>) {
  /*
   * Register LoginForm using react-hook-form
   */
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TExperience>({
    resolver: zodResolver(experienceValidationSchema),
    mode: "onBlur",
    defaultValues: experience,
  });

  const { toast } = useToast();

  const { closeModal } = useModal(EXPERIENCE_MODAL);

  const handleSubmitExperienceForm = async (values: TExperienceForm) => {
    const res =
      type === FORM_TYPE.create
        ? await addExperienceAction(JSON.stringify(values))
        : await updateExperienceAction(experience.id!, JSON.stringify(values));
    if (res && res.ok) {
      closeModal();
      toast({
        title: `Your experience has been successfully ${
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
      <form onSubmit={handleSubmit(handleSubmitExperienceForm)}>
        <div className="w-full md:flex justify-between items-end gap-16">
          <div className="flex-1">
            <InputForm
              label="Company Name"
              register={register("companyName")}
              error={errors.companyName}
            />
            <InputForm
              label="Your title"
              register={register("title")}
              error={errors.title}
            />
          </div>

          <div className="">
            <InputForm
              label="Work From"
              register={register("workFrom")}
              error={errors.location}
            />
            <InputForm
              label="Work To"
              register={register("workTo")}
              error={errors.workTo}
            />
            <InputForm
              label="Location"
              register={register("location")}
              error={errors.location}
            />
          </div>
        </div>

        <TextareaForm label="Tasks" register={register("tasks")} />
        <div className="flex gap-2 pt-4 flex-row-reverse">
          <Button disabled={!isValid}>
            {type === FORM_TYPE.create ? "Add a new" : "Update your"} Experience
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
