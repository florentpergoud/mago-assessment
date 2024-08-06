import { prisma } from "../lib/prisma";

const PROJECTS = ["Amazing project", "Project 2", "Not too bad", "Anime"];

async function main() {
  console.info("Creating projects...");
  const projects = await Promise.all(
    PROJECTS.map((name) => {
      return prisma.project.create({
        data: {
          name,
        },
      });
    })
  );

  console.info("Creating thumbnails...");
  await Promise.all(
    projects.map((project) => {
      const thumbnailsCount = Math.floor(Math.random() * 4) + 1;
      const thumbnailFilename = "thumb-" + (Math.floor(Math.random() * 10) + 1);

      return prisma.thumbnail.createMany({
        data: new Array(thumbnailsCount).fill(0).map(() => {
          return {
            filename: thumbnailFilename,
            projectId: project.id,
          };
        }),
      });
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
