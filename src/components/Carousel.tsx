import { Flex, Text, Box } from "@chakra-ui/react";
import Carousel from "react-elastic-carousel";

import { ICharacterDTO } from "../dtos/ICharacterDTO";
import { IComicsDTO } from "../dtos/IComicsDTO";

import Card from "./Card";

interface CarouselCharactersProps {
  characterItems?: ICharacterDTO[];
  comicItems?: IComicsDTO[];
}

const CarouselCharacters: React.FC<CarouselCharactersProps> = ({
  characterItems,
  comicItems,
}) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <Flex
      width="100%"
      marginX="auto"
      flexDirection="column"
      height="90vh"
      marginTop={["-30", "-50"]}
    >
      <Box>
        <Text
          marginLeft="10"
          fontSize="2xl"
          fontWeight="extrabold"
          textShadow="1px 1px 1px #3182CE"
          padding="5"
        >
          Characters
        </Text>
        {characterItems && (
          <Carousel isRTL={false} breakPoints={breakPoints} pagination={false}>
            {characterItems.map((item) => (
              <Card
                name={item.name}
                key={item.id}
                imageUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />
            ))}
          </Carousel>
        )}
      </Box>

      <Box marginTop="5">
        <Text
          marginLeft="10"
          fontSize="2xl"
          fontWeight="extrabold"
          textShadow="1px 1px 1px #3182CE"
          padding="5"
          isTruncated
          wordBreak="break-word"
        >
          Comics
        </Text>
        {comicItems && (
          <Carousel isRTL={false} breakPoints={breakPoints} pagination={false}>
            {comicItems.map((item) => (
              <Card
                name={item.title}
                key={item.id}
                imageUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />
            ))}
          </Carousel>
        )}
      </Box>
    </Flex>
  );
};

export default CarouselCharacters;
