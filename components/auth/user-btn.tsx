import { auth } from "@/auth";
import LogOutBtn from "@/components/auth/logout-btn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export async function UserButton() {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={session?.user?.image ?? ""}
            alt={session?.user?.name ?? ""}
            referrerPolicy="no-referrer"
          />
          <AvatarFallback>{session?.user?.name}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <LogOutBtn />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
