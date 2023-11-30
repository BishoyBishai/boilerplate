import { FC } from "react";
import Logo from "./Logo";

const Navbar: FC = ({}) => {
  return (
    <section className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white max max-container">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <Logo />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
