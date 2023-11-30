import Link from "next/link";
import { FC } from "react";

interface IFooterProps {}

const Footer: FC<IFooterProps> = ({}) => {
  return (
    <footer className="padding-x bg-primary text-white">
      <div className="py-10 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm ">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        <div className="mt-4 flex items-center justify-center md:mt-0">
          <div className="flex space-x-8">
            <Link href="#" className="text-sm  hover:text-gray-100">
              Terms
            </Link>
            <Link href="#" className="text-sm  hover:text-gray-100">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm  hover:text-gray-100">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
