"use client";
import { InputForm, TextareaForm } from "@/components/form";
import { Button } from "@/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import {
  TExperience,
  TExperienceForm,
  experienceValidationSchema,
} from "@/lib/validators/experience";
import { createRequestURL } from "@/lib/utils/createRequestURL";

export default function ExperienceForm({
  experience,
  formType = "create",
}: {
  experience?: TExperience;
  formType: "update" | "create";
}) {
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
  const router = useRouter();

  const handleSubmitExperienceForm = async (values: TExperienceForm) => {
    const method = formType === "update" ? "PUT" : "POST";
    const path =
      formType === "update" ? `/experience/${experience?.id}` : "/experience";
    const res = await fetch(new Request(createRequestURL(path)), {
      method,
      body: JSON.stringify(values),
    });
    if (res && res.ok) {
      alert("done");
    } else {
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Please check your credentials and try again",
      });
    }
  };

  return (
    <div className="grid gap-2 w-full p-6">
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

        <Button className="max-md:w-full" disabled={!isValid}>
          Add Experience
        </Button>
      </form>
    </div>
  );
}
