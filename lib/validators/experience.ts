import { z } from "zod";

/**
 * Create a zod schema for experience form validation
 */
export const experienceValidationSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  title: z.string().min(1, "Title is required"),
  workFrom: z.string().nullable().optional(),
  workTo: z.string().nullable().optional(),
  tasks: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
});

/**
 * Extract experience inputs type from z schema
 */
export type TExperienceForm = z.infer<typeof experienceValidationSchema>;

export type TExperience = TExperienceForm & { id: string; userId: string };
