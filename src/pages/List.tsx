import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";

import { useMarvel } from "../hooks/marvel";

import ImageBackground from "../components/ImageBackground";
import Container from "../components/Container";
import Carousel from "../components/Carousel";
import Content from "../components/Content";

import MarvelImage from "../assets/images/marvelBackground2.jpg";

const List: React.FC = () => {
  const { handleLoadCharacters, handleLoadComics, characters, comics } =
    useMarvel();

  useEffect(() => {
    handleLoadCharacters();
    handleLoadComics();
  }, [handleLoadCharacters, handleLoadComics]);

  return (
    <Container>
      <ImageBackground imageURL={MarvelImage} />

      <Content>
        <Flex width="inherit" paddingY="20">
          {characters && (
            <Carousel characterItems={characters} comicItems={comics} />
          )}
        </Flex>
      </Content>
    </Container>
  );
};

export default List;
