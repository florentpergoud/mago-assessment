import { Project, Thumbnail } from "@prisma/client";
import {
  container,
  selectedThumbnailContainer,
  selectedThumbnailStyle,
} from "./styles.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getThumbnailUrl } from "./get-thumbnail-url";
import { ThumbnailsSidePanel } from "../thumbnails-side-panel";

interface Props {
  thumbnails: Thumbnail[];
  projectId: number;
}

export const ProjectThumbnailVisualizer = ({
  thumbnails,
  projectId,
}: Props) => {
  const [selectedThumbnail, setSelectedThumbnail] = useState<Thumbnail | null>(
    thumbnails[0]
  );

  const selectedThumbnailUrl = getThumbnailUrl(selectedThumbnail?.filename);

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
        thumbnails={thumbnails}
        selectedThumbnail={selectedThumbnail}
        onThumbnailPress={setSelectedThumbnail}
        projectId={projectId}
      />
    </div>
  );
};
