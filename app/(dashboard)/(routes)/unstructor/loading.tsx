import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="p-4 bg-zinc-100 dark:bg-zinc-800 animate-pulse">
        <div className="mb-4 p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-md">
          <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
        </div>
        <div className="mb-4 p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-md flex items-center space-x-4">
          <div className="h-6 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
          <div className="h-6 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
          <div className="h-6 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
          <div className="h-6 bg-blue-200 rounded w-1/4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-600"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/2"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-2/3"></div>
              </div>
              <div className="h-6 bg-blue-200 rounded w-16"></div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <div className="h-4 bg-yellow-100 dark:bg-yellow-600 rounded w-8"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-16"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-20"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-12"></div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-600"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/2"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-2/3"></div>
              </div>
              <div className="h-6 bg-blue-200 rounded w-16"></div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <div className="h-4 bg-yellow-100 dark:bg-yellow-600 rounded w-8"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-16"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-20"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-12"></div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-600"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/2"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-2/3"></div>
              </div>
              <div className="h-6 bg-blue-200 rounded w-16"></div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <div className="h-4 bg-yellow-100 dark:bg-yellow-600 rounded w-8"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-16"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-20"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-12"></div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-600"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/2"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-2/3"></div>
              </div>
              <div className="h-6 bg-blue-200 rounded w-16"></div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <div className="h-4 bg-yellow-100 dark:bg-yellow-600 rounded w-8"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-16"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-20"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-12"></div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-600"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/2"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-2/3"></div>
              </div>
              <div className="h-6 bg-blue-200 rounded w-16"></div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <div className="h-4 bg-yellow-100 dark:bg-yellow-600 rounded w-8"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-16"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-20"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-12"></div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-600"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/2"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-2/3"></div>
              </div>
              <div className="h-6 bg-blue-200 rounded w-16"></div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <div className="h-4 bg-yellow-100 dark:bg-yellow-600 rounded w-8"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-16"></div>
              <div className="h-4 bg-green-100 dark:bg-green-600 rounded w-20"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
