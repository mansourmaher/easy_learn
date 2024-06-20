import Link from "next/link";
import { CircleUser, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { DialogDemo } from "@/app/room/[roomId]/_components/createroommodal";
import { UserButton } from "@/components/Auth/user-button";
import { Logo } from "@/app/(dashboard)/_components/logo";
import { getAllNotifications } from "@/actions/teacher/get-all-notifications";
import { auth } from "@/auth";
import SheetNotification from "@/components/Auth/notification-sheet";
import { getTheFirstConversation } from "@/actions/conversation/getthefirstconversation";
import { getFirstCommunity } from "@/actions/community/getfirstcommunity";
import { getCoursesNameAndImage } from "@/actions/course/get-courses-image-name";
import LogoutBtn from "./logoutbtn";
import TeacherBtn from "./teacherbtn";
import SearchModalTrigger from "./searchModlatrigger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Secondsidbar } from "./secondMobilesidebar";
import { MobileSidebar } from "./mobilesidebar";
import { FcDataConfiguration } from "react-icons/fc";

const StudentNavbar = async () => {
  const notifs = await getAllNotifications();
  const user = await auth();
  const userId = user?.user.id;
  const isverifiedteacher =
    user?.user.role == "TEACHER" && user?.user.teacherAccess;
  const firstconversationId = await getTheFirstConversation();
  const firstComunity = await getFirstCommunity();
  // const courses = await getCoursesNameAndImage();
  return (
    <header className=" top-0 flex h-20 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden  gap-4 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  lg:w-[2450px]">
        <div className="w-[140px] justify-center items-center hidden md:flex">
          <Logo />
        </div>

        <div className="border-r-2 border-muted h-16"></div>

        <Link
          href="/home"
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
            <Link href={`/community/${firstComunity.id}`}>Forums</Link>
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

      <MobileSidebar />

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <CoursesSearchInput courses={courses} /> */}
            {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            /> */}
            <SearchModalTrigger />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="rounded-full  cursor-pointer w-8 h-8">
              <AvatarImage src={user?.user.image || ""} alt="User profile" />

              <AvatarFallback>{user?.user?.name![0]}</AvatarFallback>
            </Avatar>

            {/* <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Link href="/setup-account">Setup Account</Link>
              <FcDataConfiguration className="w-5 h-5" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {isverifiedteacher && (
              <>
                <TeacherBtn />
                <DropdownMenuSeparator />
              </>
            )}

            <LogoutBtn />
          </DropdownMenuContent>
        </DropdownMenu>
        <SheetNotification notifications={notifs} userId={userId} />
      </div>
    </header>
  );
};

export default StudentNavbar;
