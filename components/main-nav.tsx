import { auth } from "@/auth";
import { UserButton } from "@/components/auth/user-btn";
import { Logo } from "@/components/logo";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function MainNav() {
  const session = await auth();

  return (
    <nav className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
      <Logo />
      <div className="flex items-center space-x-6">
        {session ? (
          <>
            <Button variant="ghost" asChild>
              <Link href="/profile">Profile</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/occasions">Occasions</Link>
            </Button>
            <UserButton />
          </>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
          </>
        )}
        <ThemeToggler />
      </div>
    </nav>
  );
}
