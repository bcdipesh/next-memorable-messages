import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email."),
});

export const CreateOccasionSchema = z.object({
  title: z.string().min(1, "Please provide the name of this Occasion"),
  receiverEmail: z.string().email("Please provide a valid email address"),
  deliveryMethod: z.enum(["email", "sms"]),
  message: z.string(),
  deliveryDateAndTime: z.string(),
});
