"use server";

import { prisma } from "./prisma";

export const addThumbnailToProject = async (
  projectId: number,
  filename: string
) => {
  await prisma.project.update({
    where: { id: projectId },
    data: { thumbnails: { create: { filename } } },
  });
};
