import { db } from "@/db";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";
import { experienceValidationSchema } from "@/lib/validators/experience";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // get experience object from request body
    const body = await request.json();
    // validate the parsed body
    const parsedBody = experienceValidationSchema.safeParse(body);
    // when body object doesn't match experience schema return bad request
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
    const experience = parsedBody.data;
    // create new experience
    const createdExperience = db.experience.create({
      data: { userId: currentUser.id, ...experience },
    });
    return NextResponse.json({ data: createdExperience });
  } catch (err) {
    console.log("====================================");
    console.log("Experience > Post: ", err);
    console.log("====================================");
    throw err;
  }
}
