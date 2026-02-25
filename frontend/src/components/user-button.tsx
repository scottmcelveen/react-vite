import { useSession } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserAvatar } from "@daveyplate/better-auth-ui";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { Route as AuthViewRoute } from "@/routes/auth/$authView";
import { UserView } from "./user-view";
import { useSidebar } from "./ui/sidebar";

export default function UserButton() {
  const { data: sessionData, isPending: sessionPending } = useSession();
  const user = sessionData?.user;
  const { setOpenMobile } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="rounded-full">
        <Button size="icon" className="size-fit rounded-full" variant="ghost">
          <UserAvatar
            key={user?.image}
            isPending={sessionPending}
            user={user}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] max-w-64 min-w-56"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="p-2">
          {user || sessionPending ? (
            <UserView user={user} isPending={sessionPending} />
          ) : (
            <div className="-my-1 text-xs text-muted-foreground">Account</div>
          )}
        </div>

        <DropdownMenuSeparator />

        {!user ? (
          <>
            <Link
              to={AuthViewRoute.to}
              params={{ authView: "sign-in" }}
              onClick={() => setOpenMobile(false)}
            >
              <DropdownMenuItem>
                <LogInIcon />
                Sign In
              </DropdownMenuItem>
            </Link>
          </>
        ) : (
          <>
            <Link to={AuthViewRoute.to} params={{ authView: "sign-out" }}>
              <DropdownMenuItem>
                <LogOutIcon />
                Sign Out
              </DropdownMenuItem>
            </Link>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
