import { ZodError } from "zod";

export function flattenZodError(zodError: ZodError): string {
  return zodError.errors.map((error) => error.message).join(", ");
}
