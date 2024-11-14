import { Project, Thumbnail } from "@prisma/client";
import {
  container,
  selectedThumbnailContainer,
  selectedThumbnailStyle,
} from "./styles.css";
import { useState } from "react";
import Image from "next/image";
import { getUrlForThumbnail } from "./get-url-for-thumbnail";
import { ThumbnailsSidePanel } from "../thumbnails-side-panel";

interface Props {
  project: Project & { thumbnails: Thumbnail[] };
}

export const ProjectThumbnailVisualizer = ({ project }: Props) => {
  const [selectedThumbnail, setSelectedThumbnail] = useState<Thumbnail | null>(
    project.thumbnails[0]
  );

  const selectedThumbnailUrl = getUrlForThumbnail(selectedThumbnail?.filename);
  console.log(selectedThumbnailUrl);

  return (
    <div className={container}>
      <div className={selectedThumbnailContainer}>
        <Image
          src={selectedThumbnailUrl}
          alt="thumbnail"
          className={selectedThumbnailStyle}
          width={1200}
          height={800}
        />
      </div>
      <ThumbnailsSidePanel
        thumbnails={project.thumbnails}
        selectedThumbnail={selectedThumbnail}
        onThumbnailPress={setSelectedThumbnail}
      />
    </div>
  );
};
