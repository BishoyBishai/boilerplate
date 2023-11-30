"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import { TSignUpForm, signUpValidationSchema } from "@/lib/validators/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  /**
   * Register SignUpForm using react-hook-form
   */
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TSignUpForm>({
    resolver: zodResolver(signUpValidationSchema),
    mode: "onBlur",
  });

  const handleSubmitSignUpForm = (values: TSignUpForm) => {
    console.log("====================================");
    console.log({ values });
    console.log("====================================");
  };

  return (
    <div className="grid gap-2 w-full lg:max-w-md">
      <form onSubmit={handleSubmit(handleSubmitSignUpForm)}>
        <div className="grid gap-2 py-2">
          <Label
            className={cn("text-left font-exo", {
              "text-red-500": errors.email,
            })}
            htmlFor="email"
          >
            Email
          </Label>
          <Input
            {...register("email")}
            id="email"
            className={cn("font-handlee", {
              "border border-red-500": errors.email,
              "focus-visible:ring-red-500": errors.email,
            })}
            placeholder="example@email.com"
          />
          <div className="text-red-500 text-xs text-left">
            {errors.email?.message}
          </div>
        </div>
        <div className="grid gap-1 py-2">
          <Label
            className={cn("text-left font-exo", {
              "text-red-500": errors.password,
            })}
            htmlFor="password"
          >
            Password
          </Label>
          <Input
            {...register("password")}
            className={cn("font-handlee", {
              "border border-red-500": errors.password,
              "focus-visible:ring-red-500": errors.password,
            })}
            name="password"
            type="password"
            id="password"
            placeholder="*************"
          />
          <div className="text-red-500 text-xs text-left">
            {errors.password?.message}
          </div>
        </div>
        <Button className="w-full" disabled={!isValid}>
          Sign-up
        </Button>
      </form>
    </div>
  );
}
