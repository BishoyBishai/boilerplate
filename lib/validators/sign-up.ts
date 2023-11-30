import { z } from "zod";

/**
 * Create a zod schema for sign-up form validation
 */
export const signUpValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Email has to be in valid email format"),
  password: z
    .string()
    .min(5, "Password has to be at least 5 characters length"),
  description: z.string(),
});

/**
 * Extract From inputs type from z schema
 */
export type TSignUpForm = z.infer<typeof signUpValidationSchema>;
