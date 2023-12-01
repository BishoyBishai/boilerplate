"use client";

import GoogleIcon from "@/assets/icons/GoogleIcon";
import { InputForm, TextareaForm } from "@/components/form";
import { Button } from "@/components/ui/Button";
import { TSignUpForm, signUpValidationSchema } from "@/lib/validators/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
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

  const handleGoogleSubmit = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="grid gap-2 w-full md:max-w-md">
      <form onSubmit={handleSubmit(handleSubmitSignUpForm)}>
        <InputForm
          label="Name"
          register={register("name")}
          error={errors.name}
        />
        <InputForm
          label="Email"
          register={register("email")}
          error={errors.email}
        />
        <InputForm
          label="Password"
          type="password"
          register={register("password")}
          error={errors.password}
        />
        <TextareaForm
          label="Description"
          register={register("description")}
          error={errors.description}
        />

        <Button className="w-full" disabled={!isValid}>
          Sign-up
        </Button>
      </form>
      <Button
        type="button"
        className="flex gap-4"
        onClick={handleGoogleSubmit}
        variant="outline"
      >
        <GoogleIcon />
        <p>Sign up with Google</p>
      </Button>
    </div>
  );
}
