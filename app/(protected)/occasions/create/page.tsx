import { CreateOccasionForm } from "@/app/(protected)/occasions/_components/create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Occasion",
};

export default function CreateOccasion() {
  return (
    <main>
      <h1 className="mb-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Create Occasion
      </h1>
      <CreateOccasionForm />
    </main>
  );
}
