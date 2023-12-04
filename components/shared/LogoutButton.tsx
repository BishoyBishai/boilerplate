"use client";

import { Button, ButtonProps } from "@/components/ui/Button";
import { ExternalLinkIcon } from "lucide-react";
import { signOut } from "next-auth/react";
/**
 * This button handles clear all session of next-auth and navigate to login page
 */
export default function LogoutButton(
  props: ButtonProps & React.RefAttributes<HTMLButtonElement>
) {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };
  return (
    <Button onClick={handleLogout} {...props}>
      <ExternalLinkIcon />
    </Button>
  );
}
