import { db } from "@/db";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";
import { opportunityValidationSchema } from "@/lib/validators/opportunity";
import { paramValidationSchema } from "@/lib/validators/request";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { param }: any) {
  try {
    // get opportunity object from request body
    const body = await request.json();
    // validate the parsed body
    const parsedBody = opportunityValidationSchema.safeParse(body);
    // when body object doesn't match opportunity schema return bad request
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

    const opportunity = parsedBody.data;

    // update opportunity by id
    const updatedOpportunity = db.opportunity.update({
      where: { userId: currentUser.id, id: parsedParams.data.id },
      data: { ...opportunity },
    });

    return NextResponse.json({ data: updatedOpportunity });
  } catch (err) {
    console.log("====================================");
    console.log("opportunity > PUT: ", err);
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

    // update opportunity by id
    const deletedOpportunity = db.opportunity.delete({
      where: { userId: currentUser.id, id: parsedParams.data.id },
    });

    return NextResponse.json({ data: deletedOpportunity });
  } catch (err) {
    console.log("====================================");
    console.log("opportunity > DELETE: ", err);
    console.log("====================================");
    throw err;
  }
}
