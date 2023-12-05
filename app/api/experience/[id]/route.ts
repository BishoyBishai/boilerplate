import { db } from "@/db";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";
import { experienceValidationSchema } from "@/lib/validators/experience";
import { paramValidationSchema } from "@/lib/validators/request";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { param }: any) {
  try {
    // get experience object from request body
    const body = await request.json();
    // validate the parsed body
    const parsedBody = experienceValidationSchema.safeParse(body);
    // when body object doesn't match experience schema return bad request
    if (!parsedBody.success) {
      return NextResponse.json(parsedBody.error, { status: 400 });
    }
    // validate the param data
    const parsedParams = paramValidationSchema.safeParse(param);

    // when param object doesn't have id property return bad request
    if (!parsedParams.success) {
      return NextResponse.json(parsedParams.error, { status: 400 });
    }

    // get the current user
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json("Permission deny", {
        status: 401,
      });
    }

    const experience = parsedBody.data;

    // update experience by id
    const updatedExperience = db.experience.update({
      where: { userId: currentUser.id, id: parsedParams.data.id },
      data: { ...experience },
    });

    return NextResponse.json({ data: updatedExperience });
  } catch (err) {
    console.log("====================================");
    console.log("Experience > PUT: ", err);
    console.log("====================================");
    throw err;
  }
}

export async function DELETE(_request: Request, { param }: any) {
  try {
    // validate the param data
    const parsedParams = paramValidationSchema.safeParse(param);

    // when param object doesn't have id property return bad request
    if (!parsedParams.success) {
      return NextResponse.json(parsedParams.error, { status: 400 });
    }

    // get the current user
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json("Permission deny", {
        status: 401,
      });
    }

    // update experience by id
    const deletedExperience = db.experience.delete({
      where: { userId: currentUser.id, id: parsedParams.data.id },
    });

    return NextResponse.json({ data: deletedExperience });
  } catch (err) {
    console.log("====================================");
    console.log("Experience > DELETE: ", err);
    console.log("====================================");
    throw err;
  }
}
