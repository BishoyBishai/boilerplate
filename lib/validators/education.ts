import { z } from "zod";

/**
 * Create a zod schema for education form validation
 */
export const educationValidationSchema = z.object({
  instituteName: z.string().min(1, "institute name is required"),
  studyFrom: z.string().optional(),
  workTo: z.string().optional(),
  studyTo: z.string().optional(),
  subject: z.string().min(1, "subject is required"),
  location: z.string().optional(),
});

/**
 * Extract education inputs type from z schema
 */
export type TEducationForm = z.infer<typeof educationValidationSchema>;
