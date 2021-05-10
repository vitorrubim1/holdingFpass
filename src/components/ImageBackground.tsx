import { Image } from "@chakra-ui/react";

interface ImageBackgroundProps {
  imageURL: string;
}

const ImageBackground: React.FC<ImageBackgroundProps> = ({ imageURL }) => {
  return (
    <Image
      src={imageURL}
      alt={`${imageURL} wallpaper`}
      width="inherit"
      objectFit="cover"
      draggable="false"
      opacity="0.5"
    />
  );
};

export default ImageBackground;
