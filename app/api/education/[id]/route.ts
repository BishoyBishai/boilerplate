import { db } from "@/db";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";
import { educationValidationSchema } from "@/lib/validators/education";
import { paramValidationSchema } from "@/lib/validators/request";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: any) {
  try {
    // get education object from request body
    const body = await request.json();
    // validate the parsed body
    const parsedBody = educationValidationSchema.safeParse(body);
    // when body object doesn't match education schema return bad request
    if (!parsedBody.success) {
      return NextResponse.json(parsedBody.error, { status: 400 });
    }
    // validate the param data
    const parsedParams = paramValidationSchema.safeParse(params);

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

    const education = parsedBody.data;

    // update education by id
    const updatedEducation = db.education.update({
      where: { userId: currentUser.id, id: parsedParams.data.id },
      data: { ...education },
    });

    return NextResponse.json({ data: updatedEducation });
  } catch (err) {
    console.log("====================================");
    console.log("education > PUT: ", err);
    console.log("====================================");
    throw err;
  }
}

export async function DELETE(_request: Request, { params }: any) {
  try {
    // validate the param data
    const parsedParams = paramValidationSchema.safeParse(params);

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

    // update education by id
    const deletedEducation = db.education.delete({
      where: { userId: currentUser.id, id: parsedParams.data.id },
    });

    return NextResponse.json({ data: deletedEducation });
  } catch (err) {
    console.log("====================================");
    console.log("education > DELETE: ", err);
    console.log("====================================");
    throw err;
  }
}
