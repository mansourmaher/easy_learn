"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";
import qs from "query-string";
import {
  FcBusiness,
  FcCalculator,
  FcCamera,
  FcBiotech,
  FcCurrencyExchange,
  FcDepartment,
  FcIdea,
  FcTimeline,
  FcReading,
} from "react-icons/fc";

import { Category } from "@prisma/client";
import IconComponent from "./icon-components";

interface CategoryItemProps {
  label: string;
  value: string;
}

export const CategoryItem = ({ label, value }: CategoryItemProps) => {
  const iconsMap: Record<Category["name"], IconType> = {
    "Computer Science": FcIdea, // Represents innovation and ideas
    Mathematics: FcCalculator, // Represents calculations and math
    Physics: FcTimeline, // Represents concepts in physics
    Chemistry: FcBusiness, // Represents business and chemistry
    Biology: FcBiotech, // Represents biological science
    Economics: FcCurrencyExchange, // Represents economics and currency
    Business: FcDepartment, // Represents a business department
    Psychology: FcReading, // Represents studying and psychology
    History: FcCamera,
  };
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");
  const currenTitle = searchParams.get("title");

  const isSelected = value === currentCategory;
  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currenTitle,
          category: isSelected ? null : value,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  };
  return (
    <button
      onClick={() => onClick()}
      className={cn(
        "py-2 px-6 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition",
        isSelected && "border-sky-700 bg-sky-200/20 text-sky-700"
      )}
      type="button"
    >
      <IconComponent Icon={iconsMap[label as Category["name"]]} />
      <div className="truncate"> {label}</div>
    </button>
  );
};
