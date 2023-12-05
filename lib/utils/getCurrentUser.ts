import { db } from "@/db";
import { getServerSession } from "next-auth";

export const getCurrentUser = async () => {
  const session = await getServerSession();

  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user?.email!,
    },
  });

  return currentUser;
};
