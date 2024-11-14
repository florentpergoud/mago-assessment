import { Thumbnail } from "@prisma/client";
import {
  container,
  panelHeader,
  panelHeaderTitle,
  thumbnailItem,
  thumbnailsList,
} from "./styles.css";
import { ThemeButton } from "../theme-button";
import { DeletableThumbnail } from "../deletable-thumbnail";

interface Props {
  thumbnails: Thumbnail[];
  selectedThumbnail: Thumbnail | null;
  onThumbnailPress: (thumbnail: Thumbnail) => void;
  projectId: number;
}

export const ThumbnailsSidePanel = ({
  thumbnails,
  selectedThumbnail,
  onThumbnailPress,
  projectId,
}: Props) => {
  return (
    <div className={container}>
      <div className={panelHeader}>
        <h2 className={panelHeaderTitle}>Assets</h2>
        <ThemeButton>+</ThemeButton>
      </div>
      <div className={thumbnailsList}>
        {thumbnails.map((thumbnail) => (
          <div
            key={thumbnail.id}
            className={thumbnailItem}
            data-active={selectedThumbnail?.id === thumbnail.id}
          >
            <DeletableThumbnail thumbnail={thumbnail} />
          </div>
        ))}
      </div>
    </div>
  );
};
