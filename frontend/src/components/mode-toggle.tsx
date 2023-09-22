import { Moon, Sun, User2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import { UserRes, getUser } from "@/services/user.service";
import { useNavigate, Outlet } from "react-router-dom";
import { postSignout } from "@/services/auth.service";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const [info, setInfo] = useState<UserRes | undefined>();
  // let history = useHistory();
  // const location = useLocation()
  useEffect(() => {
    const paths = ["/signin", "/signup"];
    const getUserEffect = async () => {
      try {
        const user = await getUser();
        setInfo(user);
        console.log(user, location.pathname);
        if (location.pathname === "/" && !user) {
          navigate("/signin");
        } else if (location.pathname === "/signup" && !user) {
        } else if (user && paths.includes(location.pathname)) {
          navigate("/");
        }
      } catch (error) {
        if (!paths.includes(location.pathname)) {
          navigate("signin");
        }
      }
    };
    getUserEffect();
  }, [location.pathname]);
  return (
    <>
      <div className="absolute top-4 right-4 flex space-x-3">
        {info ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback><User2/></AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {info.username}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {info.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={async () => {
                  await postSignout();
                  setInfo(undefined);
                  navigate('/signin')
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : undefined}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Outlet />
    </>
  );
}
