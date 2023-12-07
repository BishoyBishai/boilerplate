"use server";
import { db } from "@/db";
import { createServerAction } from "@/lib/utils/createServerAction";
import { handleServerActionError } from "@/lib/utils/handleServerActionError";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";
import {
  TEducation,
  educationValidationSchema,
} from "@/lib/validators/education";
import { TServerAction } from "@/models/actions";
import { revalidatePath } from "next/cache";

export const addEducationAction = async (
  data: string
): Promise<TServerAction<TEducation>> => {
  return createServerAction(data, educationValidationSchema, async (data) => {
    const currentUser = await getCurrentUser();
    // create new education
    const createdEducation = await db.education.create({
      data: { ...data, userId: currentUser?.id! },
    });
    revalidatePath("/resume");
    return { ok: true, data: createdEducation };
  });
};

export const updateEducationAction = async (
  id: string,
  data: string
): Promise<TServerAction<TEducation>> => {
  return createServerAction(data, educationValidationSchema, async (data) => {
    // update education
    const createdEducation = await db.education.update({
      data: { ...data },
      where: {
        id,
      },
    });
    revalidatePath("/resume");
    return { ok: true, data: createdEducation };
  });
};

export const deleteEducationAction = async (
  id: string
): Promise<TServerAction<TEducation>> => {
  try {
    // delete education
    const createdEducation = await db.education.delete({
      where: { id },
    });
    revalidatePath("/resume");
    return { ok: true, data: createdEducation };
  } catch (err) {
    return handleServerActionError(err);
  }
};
