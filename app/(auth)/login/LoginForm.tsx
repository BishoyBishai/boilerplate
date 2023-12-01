"use client";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { InputForm } from "@/components/form";
import { Button } from "@/components/ui/Button";
import { TLoginForm, loginValidationSchema } from "@/lib/validators/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  /*
   * Register LoginForm using react-hook-form
   */
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TLoginForm>({
    resolver: zodResolver(loginValidationSchema),
    mode: "onBlur",
  });

  const handleSubmitLoginForm = (values: TLoginForm) => {
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
      <form onSubmit={handleSubmit(handleSubmitLoginForm)}>
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

        <Button className="w-full" disabled={!isValid}>
          Login
        </Button>
      </form>
      <Button
        type="button"
        className="flex gap-4"
        onClick={handleGoogleSubmit}
        variant="outline"
      >
        <GoogleIcon />
        <p>Sign in with Google</p>
      </Button>
    </div>
  );
}
