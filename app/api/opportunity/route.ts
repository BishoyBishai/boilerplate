import { db } from "@/db";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";
import { opportunityValidationSchema } from "@/lib/validators/opportunity";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // get opportunity object from request body
    const body = await request.json();
    // validate the parsed body
    const parsedBody = opportunityValidationSchema.safeParse(body);
    // when body object doesn't match opportunity schema return bad request
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
    const opportunity = parsedBody.data;
    // create new opportunity
    const createdOpportunity = db.opportunity.create({
      data: { userId: currentUser.id, ...opportunity },
    });
    return NextResponse.json({ data: createdOpportunity });
  } catch (err) {
    console.log("====================================");
    console.log("opportunity > Post: ", err);
    console.log("====================================");
    throw err;
  }
}
