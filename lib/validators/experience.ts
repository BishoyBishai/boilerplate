import { z } from "zod";

/**
 * Create a zod schema for experience form validation
 */
export const experienceValidationSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  workFrom: z.string().min(1, "Work starting data is required"),
  workTo: z.string().optional(),
  tasks: z.string().optional(),
  location: z.string().optional(),
});

/**
 * Extract experience inputs type from z schema
 */
export type TExperienceForm = z.infer<typeof experienceValidationSchema>;
