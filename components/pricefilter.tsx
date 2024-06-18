"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import qs from "query-string";
import { cn } from "@/lib/utils";

function PriceFilter() {
  const [value, setValue] = React.useState<string>("");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPrice = searchParams.get("price");
  const currenTitle = searchParams.get("title");
  const currentCategory = searchParams.get("category");

  const onClick = (realValue: string) => {
    setValue(realValue);
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currenTitle,
          category: currentCategory,
          price: realValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="flex justify-center py-4">
      <div className="border-b border-gray-200 w-full max-w-xl">
        <ul className="flex justify-between -mb-px">
          <li className="text-center">
            <a
              className={cn(
                "inline-block p-4 text-sm font-medium text-gray-500 hover:text-gray-600 hover:border-gray-300 border-b-2 border-transparent cursor-pointer",
                {
                  "border-sky-700 text-blue-700": value === "all",
                }
              )}
              onClick={() => {
                onClick("all");
              }}
            >
              All Courses
            </a>
          </li>
          <li className="text-center">
            <a
              className={cn(
                "inline-block p-4 text-sm font-medium text-gray-500 hover:text-gray-600 hover:border-gray-300 border-b-2 border-transparent cursor-pointer",
                {
                  "border-sky-700 text-blue-700": value === "free",
                }
              )}
              onClick={() => {
                onClick("free");
              }}
            >
              Free Courses
            </a>
          </li>
          <li className="text-center">
            <a
              className={cn(
                "inline-block p-4 text-sm font-medium text-gray-500 hover:text-gray-600 hover:border-gray-300 border-b-2 border-transparent cursor-pointer",
                {
                  "border-sky-700 text-blue-700": value === "paid",
                }
              )}
              onClick={() => {
                onClick("paid");
              }}
            >
              Paid Courses
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PriceFilter;
