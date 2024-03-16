"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { z } from "zod";

export async function deleteOccasion(id: string) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Unauthorized",
    };
  }

  const validatedFields = z.string().safeParse(id);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  try {
    await prisma.occasion.delete({
      where: {
        id: validatedFields.data,
      },
    });
  } catch (error) {
    return {
      error: "Failed to delete Occasion.",
    };
  }

  return {
    success: "Occasion successfully deleted!",
  };
}
