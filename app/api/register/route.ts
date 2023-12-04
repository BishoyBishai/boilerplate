import { NextResponse } from "next/server";
import { signUpValidationSchema } from "@/lib/validators/sign-up";
import { db } from "@/db";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  try {
    // get email and password from request
    const body = await request.json();
    // validate the parsed body
    const parsedBody = signUpValidationSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(parsedBody.error, { status: 400 });
    }

    const { email, password, description, name } = parsedBody.data;

    // check if the user already exists
    const exist = await db.user.findFirst({ where: { email } });

    if (exist) {
      return NextResponse.json(
        { error: "Your Email is already exist try to logins" },
        { status: 400 }
      );
    }

    // has the user password
    const hashedPassword = await hash(password, 5);

    // create a new user
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        description: description,
        name,
      },
    });

    return NextResponse.json({ data: user });
  } catch (err) {
    throw err;
  }
}
