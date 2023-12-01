import { FC } from "react";
import Logo from "./Logo";
import { getServerSession } from "next-auth";
import LogoutButton from "../LogoutButton";

const Navbar: FC = async () => {
  // from next-auth check if the use login/not
  const session = await getServerSession();
  return (
    <section className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white max max-container">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center justify-between">
            <Logo />
            <div className="flex gap-2 pr-4">
              {session && <LogoutButton variant="link" />}
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
