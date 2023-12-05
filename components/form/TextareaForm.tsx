"use client";
/**
 * TextareaForm Component
 * A reusable React component that encapsulates a form textarea field with a label and error message.
 */
import { FC, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Label } from "../ui/Label";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

interface ITextareaFormProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}
const TextareaForm: FC<ITextareaFormProps> = ({
  label,
  register,
  error,
  ...textareaProps
}) => {
  return (
    <div className="grid gap-2 py-2">
      <Label
        className={cn("text-left font-exo", {
          "text-red-500": error,
        })}
        htmlFor={register.name}
      >
        {label}
      </Label>
      <Textarea
        id={register.name}
        {...register}
        {...textareaProps}
        className={cn("ont-handlee h-[200px]", {
          "border border-red-500 focus-visible:ring-red-500": error,
        })}
      />
      {error?.message && (
        <div className="text-red-500 text-xs text-left font-handlee">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default TextareaForm;
