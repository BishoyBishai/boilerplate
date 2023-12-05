import { z } from "zod";

/**
 * Create a zod schema for request params
 */
export const paramValidationSchema = z.object({
  id: z.string(),
});

export type TParam = z.infer<typeof paramValidationSchema>;
