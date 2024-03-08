import { auth } from "@/auth";

export default async function OccasionsPage() {
  const session = auth();

  return JSON.stringify(session);
}
