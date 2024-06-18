"use client";
import { getCurrentUser } from "@/hooks/getCurrentUser";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "../ui/avatar";
import { getAllNotifications } from "@/actions/teacher/get-all-notifications";
import { useEffect, useState } from "react";
import { pusherClient } from "@/lib/pusher";
import { ScrollArea } from "../ui/scroll-area";
import SingleNotifications from "../single-notification";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { BellDot, BellDotIcon, BellIcon, CircleUser } from "lucide-react";

interface UserButtonProps {
  notifications: Awaited<ReturnType<typeof getAllNotifications>>;
  userId: string | undefined;
}

export default function SheetNotification({
  notifications,
  userId,
}: UserButtonProps) {
  const [notifcationNumber, setNotificationNumber] = useState<number>(0);
  const [newNotif, setNexNotif] = useState(false);
  const [notification, setNotification] =
    useState<Awaited<ReturnType<typeof getAllNotifications>>>(notifications);
  useEffect(() => {
    pusherClient.subscribe("notification");
    pusherClient.bind("new-notification", (data: any) => {
      if (data.notification.teacher === userId) {
        setNexNotif(true);
        setNotification((prev) => [data.notification, ...prev]);
        setNotificationNumber((prev) => prev + 1);
      }
    });
    return () => {
      pusherClient.unsubscribe("notification");
    };
  }, [notifications]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer">
          {newNotif && (
            <span className="absolute top-[-5px] right-[-5px] flex items-center justify-center w-3 h-3 bg-blue-500 text-white text-xs rounded-full" />
          )}
          <BellIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </div>
      </SheetTrigger>
      <SheetContent side={"right"} className="overflow-y-auto">
        <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
          Notifications
        </div>
        {notification.length === 0 && (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400">
            No notifications
          </div>
        )}
        <ScrollArea className="h-[700px]  rounded-md border ">
          {notification.map((notification) => (
            <SingleNotifications
              key={notification.id}
              notifcation={notification}
            />
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
