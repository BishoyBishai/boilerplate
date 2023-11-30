import LogoIcon from "@/assets/icons/LogoIcon";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <>
      <div className="container flex justify-center flex-col items-start pt-2 lg:px-0 h-full">
        <div className="flex mx-auto w-full flex-col space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <LogoIcon />
            <h1 className="text-xl font-bold font-exo">Create New Account</h1>
            <Link
              href="/sign-ip"
              className={buttonVariants({ variant: "link" })}
            >
              already have account? Sign-in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
