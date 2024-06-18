import { Category } from "@prisma/client";

import { db } from "@/lib/db";
import { CategoryItemforComunty } from "./categoryItemforcomunity";

interface CategoriesProps {
  items: Category[];
}

export const CategoriresForComuntiy = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
    include: {
      Community: {
        select: {
          id: true,
        },
      },
    },
  });
  return (
    <div className="flex items-center gap-x-2 overflow-auto pb-2">
      {categories.map((item) => (
        <CategoryItemforComunty
          key={item.id}
          label={item.name}
          value={item.id}
          commId={item.Community}
        />
      ))}
    </div>
  );
};
