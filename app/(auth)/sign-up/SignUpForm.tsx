"use client";

import GoogleIcon from "@/assets/icons/GoogleIcon";
import { InputForm, TextareaForm } from "@/components/form";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/hooks/useToast";
import { TSignUpForm, signUpValidationSchema } from "@/lib/validators/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

  const { toast } = useToast();

  const handleSubmitSignUpForm = async (values: TSignUpForm) => {
    // make registration request
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(values),
    });
    // handling the response
    if (res.ok) {
      router.push("/login");
      toast({
        variant: "default",
        title: "Success",
        description:
          "Your account has been created successfully, Try to login now",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Failed",
      });
    }
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
