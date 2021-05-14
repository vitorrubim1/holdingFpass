import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";

import { useMarvel } from "../hooks/marvel";

import ImageBackground from "../components/ImageBackground";
import Container from "../components/Container";
import Carousel from "../components/Carousel";
import Content from "../components/Content";

import MarvelImage from "../assets/images/marvelBackground2.jpg";
import Loading from "../components/Loading";

const List: React.FC = () => {
  const { handleLoadCharactersAndComics, characters, comics, loading } =
    useMarvel();

  useEffect(() => {
    handleLoadCharactersAndComics();
  }, [handleLoadCharactersAndComics]);

  return (
    <Container>
      <ImageBackground imageURL={MarvelImage} />

      <Content>
        <Flex width="inherit" padding={["", "10"]}>
          {loading && <Loading />}

          {characters && !loading && (
            <Carousel characterItems={characters} comicItems={comics} />
          )}
        </Flex>
      </Content>
    </Container>
  );
};

export default List;
