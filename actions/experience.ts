"use server";
import { db } from "@/db";
import { createServerAction } from "@/lib/utils/createServerAction";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";
import { handleServerActionError } from "@/lib/utils/handleServerActionError";
import {
  TExperience,
  experienceValidationSchema,
} from "@/lib/validators/experience";
import { TServerAction } from "@/models/actions";
import { revalidatePath } from "next/cache";

export const addExperienceAction = async (
  data: string
): Promise<TServerAction<TExperience>> => {
  return createServerAction(data, experienceValidationSchema, async (data) => {
    const currentUser = await getCurrentUser();
    // create new experience
    const createdExperience = await db.experience.create({
      data: { ...data, userId: currentUser?.id! },
    });
    revalidatePath("/resume");
    return { ok: true, data: createdExperience };
  });
};

export const updateExperienceAction = async (
  id: string,
  data: string
): Promise<TServerAction<TExperience>> => {
  return createServerAction(data, experienceValidationSchema, async (data) => {
    // update experience
    const createdExperience = await db.experience.update({
      data: { ...data },
      where: {
        id,
      },
    });
    revalidatePath("/resume");
    return { ok: true, data: createdExperience };
  });
};

export const deleteExperienceAction = async (
  id: string
): Promise<TServerAction<TExperience>> => {
  try {
    // delete experience
    const createdExperience = await db.experience.delete({
      where: { id },
    });
    revalidatePath("/resume");
    return { ok: true, data: createdExperience };
  } catch (err) {
    return handleServerActionError(err);
  }
};
