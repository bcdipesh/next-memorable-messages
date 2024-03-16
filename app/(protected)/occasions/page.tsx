import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import Link from "next/link";

import OccasionsTable from "./_components/occasions-table";

export const metadata: Metadata = {
  title: "Occasions",
};

export default async function Occasion() {
  const occasions = await prisma.occasion.findMany();

  return (
    <main className="flex flex-col gap-5">
      <h1 className="mb-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Occasions
      </h1>
      <Link href="/occasions/create">
        <Button>Create Occasion</Button>
      </Link>
      <OccasionsTable occasions={occasions} />
    </main>
  );
}
