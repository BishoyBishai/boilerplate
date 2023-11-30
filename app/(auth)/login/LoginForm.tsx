"use client";

import { InputForm } from "@/components/form";
import { Button } from "@/components/ui/Button";
import { TLoginForm, loginValidationSchema } from "@/lib/validators/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  /**
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
    </div>
  );
}
