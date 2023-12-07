import { TServerAction } from "@/models/actions";
import { ZodSchema } from "zod";
import { flattenZodError } from "./flattenZodError";
import { handleServerActionError } from "./handleServerActionError";

export const createServerAction = async <T>(
  data: string,
  schema: ZodSchema,
  action: (data: T) => Promise<TServerAction<T>>
): Promise<TServerAction<T>> => {
  // validate the data type
  const parsedData = schema.safeParse(JSON.parse(data));
  // when body object doesn't match experience schema return error
  if (!parsedData.success) {
    return {
      ok: false,
      error: `Validation error: ${flattenZodError(parsedData.error)}`,
    };
  }
  try {
    // run the action
    return await action(parsedData.data);
  } catch (err) {
    return handleServerActionError(err);
  }
};
