import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";

import { useMarvel } from "../hooks/marvel";

import ImageBackground from "../components/ImageBackground";
import Container from "../components/Container";
import Carousel from "../components/Carousel";
import Content from "../components/Content";

import MarvelImage from "../assets/images/marvelBackground2.jpg";
import Loading from "../components/Loading";
import GoBack from "../components/GoBack";

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
        <Flex
          position="relative"
          width="inherit"
          padding={["7", "16"]}
          flexDirection="column"
        >
          <GoBack to="/" />
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
