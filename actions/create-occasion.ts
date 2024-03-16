"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { convertDatetimeLocalToIso } from "@/lib/utils";
import { CreateOccasionSchema } from "@/schemas";
import { z } from "zod";

export async function createOccasion(
  values: z.infer<typeof CreateOccasionSchema>,
) {
  const session = await auth();
  const validatedFields = CreateOccasionSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { title, receiverEmail, deliveryMethod, message, deliveryDateAndTime } =
    validatedFields.data;

  try {
    await prisma.occasion.create({
      data: {
        userId: session?.user?.id ?? "",
        title,
        receiverEmail,
        deliveryMethod,
        message,
        deliveryDateAndTime: convertDatetimeLocalToIso(deliveryDateAndTime),
      },
    });
  } catch (error) {
    return {
      error: "Failed to create Occasion.",
    };
  }

  return { success: "Occasion successfully created!" };
}
