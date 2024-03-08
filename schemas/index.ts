import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email."),
});
