import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { getAllNotifications } from "@/actions/teacher/get-all-notifications";
import { auth } from "@/auth";
import { getTheFirstConversation } from "@/actions/conversation/getthefirstconversation";
import { getFirstCommunity } from "@/actions/community/getfirstcommunity";

export const Secondsidbar = async () => {
  const notifs = await getAllNotifications();
  const user = await auth();
  const userId = user?.user.id;
  const isverifiedteacher =
    user?.user.role == "TEACHER" && user?.user.teacherAccess;
  const firstconversationId = await getTheFirstConversation();
  const firstComunity = await getFirstCommunity();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="border-r  md:block w-full">
        <div className="flex h-full max-h-screen flex-col ">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo />
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <div className="w-[190px]">
                <Logo />
              </div>

              <div className="border-r-2 border-muted h-16"></div>

              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="/"
                className="text-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>

              <Button
                variant={"link"}
                size={"sm"}
                className="text-muted-foreground transition-colors hover:text-foreground"
                asChild
              >
                <Link href="/search">Browse Courses</Link>
              </Button>

              <Button
                variant={"link"}
                size={"sm"}
                className="text-muted-foreground transition-colors hover:text-foreground"
                asChild
              >
                <Link href="/unstructor">Top Teachers</Link>
              </Button>

              <Button
                variant={"link"}
                size={"sm"}
                className="text-muted-foreground transition-colors hover:text-foreground"
                asChild
              >
                {firstComunity && (
                  <Link href={`/community/${firstComunity.id}`}>Community</Link>
                )}
              </Button>
              <Button
                variant={"link"}
                size={"sm"}
                className="text-muted-foreground transition-colors hover:text-foreground"
                asChild
              >
                {firstconversationId && (
                  <Link href={`/conversations/${firstconversationId.id}`}>
                    My Conversations
                  </Link>
                )}
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
