import { prisma } from "./prisma";

export const fetchProjects = async () => {
  const projects = await prisma.project.findMany({
    include: {
      thumbnails: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return projects.map((project) => ({
    ...project,
    createdAt: project.createdAt.toISOString(),
    updatedAt: project.updatedAt.toISOString(),
  }));
};
