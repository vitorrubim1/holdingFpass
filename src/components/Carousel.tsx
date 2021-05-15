import { useCallback, useState } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Carousel from "react-elastic-carousel";

import { useMarvel } from "../hooks/marvel";

import { ICharacterAndComicDTO } from "../dtos/ICharacterAndComicDTO";

import Card from "./Card";

interface CarouselCharactersProps {
  characterItems?: ICharacterAndComicDTO[];
  comicItems?: ICharacterAndComicDTO[];
}

const CarouselCharacters: React.FC<CarouselCharactersProps> = ({
  characterItems,
  comicItems,
}) => {
  const [offsetCharacter, setOffsetCharacter] = useState(14);
  const [offsetComics, setOffsetComics] = useState(14);

  const { handleLoadMore } = useMarvel();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1750, itemsToShow: 6, itemsToScroll: 4 },
  ];

  const loadMore = useCallback(
    (type: "characters" | "comics") => {
      if (type === "characters") {
        setOffsetCharacter(offsetCharacter + 15);
      }

      if (type === "comics") {
        setOffsetComics(offsetComics + 15);
      }

      handleLoadMore(type);
    },
    [handleLoadMore, offsetCharacter, offsetComics]
  );

  return (
    <Flex
      width="inherit"
      marginX="auto"
      flexDirection="column"
      height="100vh"
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
          <Carousel
            isRTL={false}
            breakPoints={breakPoints}
            pagination={false}
            onNextEnd={(currentItem) => {
              if (currentItem.index >= offsetCharacter) {
                loadMore("characters");
              }
            }}
          >
            {characterItems.map((item, index) => (
              <Card
                type="characters"
                name={item.name}
                key={index}
                id={item.id}
                imageUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />
            ))}
          </Carousel>
        )}
      </Box>

      <Box>
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
          <Carousel
            isRTL={false}
            breakPoints={breakPoints}
            pagination={false}
            onNextEnd={(currentItem) => {
              if (currentItem.index >= offsetComics) {
                loadMore("comics");
              }
            }}
          >
            {comicItems.map((item, index) => (
              <Card
                type="comics"
                name={item.title}
                key={index}
                id={item.id}
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
