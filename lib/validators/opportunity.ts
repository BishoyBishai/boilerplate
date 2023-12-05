import { z } from "zod";

/**
 * Create a zod schema for opportunity form validation
 */
export const opportunityValidationSchema = z.object({
  companyName: z.string(),
  jobTitle: z.string(),
  jobDescription: z.string(),
  match: z.number(),
  coverLetter: z.string(),
  userId: z.string(),
});

/**
 * Extract opportunity inputs type from z schema
 */
export type TOpportunityForm = z.infer<typeof opportunityValidationSchema>;
