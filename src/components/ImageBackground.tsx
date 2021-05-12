import { Image } from "@chakra-ui/react";

interface ImageBackgroundProps {
  imageURL: string;
  opacity?: string;
}

const ImageBackground: React.FC<ImageBackgroundProps> = ({
  imageURL,
  opacity,
}) => {
  return (
    <Image
      src={imageURL}
      alt={`${imageURL} wallpaper`}
      width="inherit"
      objectFit="cover"
      draggable="false"
      opacity={`${opacity ? opacity : "0.5"}`}
    />
  );
};

export default ImageBackground;
