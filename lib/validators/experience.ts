import { z } from "zod";

/**
 * Create a zod schema for experience form validation
 */
export const experienceValidationSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  workFrom: z.string().min(1, "Work starting data is required").nullable(),
  workTo: z.string().nullable(),
  tasks: z.string().nullable(),
  location: z.string().nullable(),
});

/**
 * Extract experience inputs type from z schema
 */
export type TExperienceForm = z.infer<typeof experienceValidationSchema>;

export type TExperience = TExperienceForm & { id: string; userId: string };
