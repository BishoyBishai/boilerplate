import LogoIcon from "@/assets/icons/LogoIcon";
import { buttonVariants } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import SignUpForm from "./SignUpForm";

const page: FC = ({}) => {
  return (
    <>
      <div className="container flex justify-center flex-col items-start pt-2 lg:px-0 h-full padding-y">
        <div className="flex mx-auto w-full flex-col space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <LogoIcon />
            <h1 className="text-xl font-bold font-exo">Create New Account</h1>
            <SignUpForm />
            <Link
              href="/sign-ip"
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
            >
              already have account? Sign-in <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
