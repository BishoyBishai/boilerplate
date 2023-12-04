import { db } from "@/db";
import { loginValidationSchema } from "@/lib/validators/login";
import { compare } from "bcryptjs";
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

export const validateLoginSchema = (
  credentials: Record<never, string> | undefined
) => {
  const parsedBody = loginValidationSchema.safeParse(credentials);
  if (!parsedBody.success) {
    throw new Error("Invalid login data");
  }
  return parsedBody.data;
};

export const getUserByEmail = async (email: string) => {
  const exist = await db.user.findFirst({ where: { email } });
  if (!exist) {
    throw new Error("User does not exist");
  }
  return exist;
};

export const comparePasswords = async (
  providedPassword: string,
  storedPassword: string
) => {
  const isPasswordCorrect = await compare(providedPassword, storedPassword);
  if (!isPasswordCorrect) {
    throw new Error("Password does not match");
  }
};
