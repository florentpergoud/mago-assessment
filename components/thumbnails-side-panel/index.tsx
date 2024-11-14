import { Thumbnail } from "@prisma/client";
import {
  container,
  panelHeader,
  panelHeaderTitle,
  thumbnailItem,
  thumbnailsList,
} from "./styles.css";
import { ThemeButton } from "../theme-button";

interface Props {
  thumbnails: Thumbnail[];
  selectedThumbnail: Thumbnail | null;
  onThumbnailPress: (thumbnail: Thumbnail) => void;
}

export const ThumbnailsSidePanel = ({
  thumbnails,
  selectedThumbnail,
  onThumbnailPress,
}: Props) => {
  return (
    <div className={container}>
      <div className={panelHeader}>
        <h2 className={panelHeaderTitle}>Assets</h2>
      </div>
      <div className={thumbnailsList}>
        {thumbnails.map((thumbnail) => (
          <ThemeButton
            key={thumbnail.id}
            className={thumbnailItem}
            data-active={selectedThumbnail?.id === thumbnail.id}
            onPress={() => onThumbnailPress(thumbnail)}
          >
            {thumbnail.filename}
          </ThemeButton>
        ))}
      </div>
    </div>
  );
};
