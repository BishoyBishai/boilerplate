import { db } from "@/db";
import { JWT } from "next-auth/jwt";

export const getAppUser = async (token: JWT) => {
  try {
    const user = await db.user.findFirst({ where: { authId: token.sub } });
    if (user) {
      return user;
    }
    return await db.user.create({
      data: {
        authId: token.sub!,
        name: token.name,
        email: token.email!,
      },
    });
  } catch (err) {
    throw err;
  }
};
