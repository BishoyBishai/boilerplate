"use client";
import { signOut } from "next-auth/react";
/**
 * This button handles clear all session of next-auth and navigate to login page
 */
export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };
  return <div onClick={handleLogout}>Log out</div>;
}
