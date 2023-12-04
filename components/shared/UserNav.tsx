import { Button } from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/DropdownMenu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/Avatar";
import LogoutButton from "./LogoutButton";
import { getServerSession } from "next-auth";
import { extractInitials } from "@/lib/utils/extractInitials";

export default async function UserNav() {
  const session = await getServerSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={session?.user?.image!}
              alt={session?.user?.email!}
            />
            <AvatarFallback>
              {extractInitials(session?.user?.name!)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name!}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email!}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
