import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col space-y-6">
      <div role="none" className="shrink-0 bg-border h-[1px] w-full"></div>

      <div className="flex flex-col justify-between md:flex-row">
        <Logo />

        <div className="flex space-x-6">
          <Button asChild variant="link" className="w-fit p-0">
            <Link href="/terms-of-service">Terms of Service</Link>
          </Button>
          <Button asChild variant="link" className="w-fit p-0">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        &copy; {currentYear} Memorable Messages. Made to create memories that
        will last a lifetime.
      </p>
    </footer>
  );
}
