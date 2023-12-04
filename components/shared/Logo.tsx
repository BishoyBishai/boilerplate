import LogoIcon from "@/assets/icons/LogoIcon";
import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="ml-4 flex lg:ml-2 font-bold text-primary font-handlee">
      <Link href="/">
        <div className="flex justify-center items-center gap-2">
          <LogoIcon /> <p className="text-2xl leading-none">BallierPlate</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
