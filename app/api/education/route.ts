import { db } from "@/db";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";
import { educationValidationSchema } from "@/lib/validators/education";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // get education object from request body
    const body = await request.json();
    // validate the parsed body
    const parsedBody = educationValidationSchema.safeParse(body);
    // when body object doesn't match education schema return bad request
    if (!parsedBody.success) {
      return NextResponse.json(parsedBody.error, { status: 400 });
    }
    // get the current user
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json("Permission deny", {
        status: 401,
      });
    }
    const education = parsedBody.data;
    // create new education
    const createdEducation = db.education.create({
      data: { userId: currentUser.id, ...education },
    });
    return NextResponse.json({ data: createdEducation });
  } catch (err) {
    console.log("====================================");
    console.log("education > Post: ", err);
    console.log("====================================");
    throw err;
  }
}
