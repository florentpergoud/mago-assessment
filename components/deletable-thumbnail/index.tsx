import Image from "next/image";
import { Thumbnail } from "@prisma/client";
import {
  thumbnailImage,
  thumbnailContainer,
  deleteOverlay,
} from "./styles.css";
import { getThumbnailUrl } from "../project-assets-visualizer/get-thumbnail-url";
import { ThemeButton } from "../theme-button";

interface Props {
  thumbnail: Thumbnail;
}

export const DeletableThumbnail = ({ thumbnail }: Props) => {
  const handleDelete = () => {};

  return (
    <div className={thumbnailContainer}>
      <Image
        src={getThumbnailUrl(thumbnail.filename)}
        alt={thumbnail.filename}
        width={200}
        height={100}
        className={thumbnailImage}
      />

      {/* <div className={deleteOverlay}>
        <ThemeButton onPress={handleDelete}>Delete</ThemeButton>
      </div> */}
    </div>
  );
};
