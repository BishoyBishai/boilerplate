"use client";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { InputForm } from "@/components/form";
import { Button } from "@/components/ui/Button";
import { TLoginForm, loginValidationSchema } from "@/lib/validators/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import Separator from "@/components/shared/Separator";

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

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmitLoginForm = async (values: TLoginForm) => {
    const res = await signIn("credentials", {
      ...values,
      redirect: false,
    });
    if (res && res.ok) {
      // valid login
      router.replace("/");
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Please check your credentials and try again",
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
      <Separator className="my-2" withText="Or continue with" />
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
