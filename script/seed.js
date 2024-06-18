const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    const categories = await db.category.findMany();
    if (categories.length > 0) {
      craeteComunty();
      return;
    }
    const categ = await db.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Mathematics" },
        { name: "Physics" },
        { name: "Chemistry" },
        { name: "Biology" },
        { name: "Economics" },
        { name: "Business" },
        { name: "Psychology" },
        { name: "History" },
      ],
    });
    console.log("Categories created successfully");
    craeteComunty();
  } catch (e) {
    console.log(e);
  } finally {
    db.$disconnect();
  }
}
main();
async function craeteComunty() {
  try {
    const categories = await db.category.findMany();
    if (categories.length > 0) {
      console.log("Categories already created");
      console.log(categories);
      const c = categories.forEach(async (c) => {
        await db.community.create({
          data: {
            title: c.name,
            category: {
              connect: { id: c.id },
            },
          },
        });
      });
      console.log(c);
      console.log("Communities created successfully");
      return;
    }
  } catch (e) {
    console.log(e);
  }
}
