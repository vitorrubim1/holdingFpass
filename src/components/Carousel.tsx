import { Flex, Text } from "@chakra-ui/react";
import Carousel from "react-elastic-carousel";

import { ICharacterDTO } from "../dtos/ICharacterDTO";

import Card from "./Card";

interface CarouselCharactersProps {
  items: ICharacterDTO[]; // mudar isso
}

const CarouselCharacters: React.FC<CarouselCharactersProps> = ({ items }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <Flex flexDirection="column" width="100%" marginX="auto">
      <Text>Teste</Text>

      <Carousel isRTL={false} breakPoints={breakPoints} pagination={false}>
        {items.map((item) => (
          <Card
            name={item.name}
            key={item.id}
            imageUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          />
        ))}
      </Carousel>
    </Flex>
  );
};

export default CarouselCharacters;
