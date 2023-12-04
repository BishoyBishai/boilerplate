import { PropsWithChildren } from "react";
import Logo from "./Logo";

const Navbar = async ({ children }: PropsWithChildren) => {
  return (
    <section className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white max max-container">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center justify-between">
            <Logo />
            {children}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
