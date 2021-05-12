import { useCallback, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import md5 from "md5";
import axios from "axios";

import { ICharacterDTO } from "../dtos/ICharacterDTO";

import ImageBackground from "../components/ImageBackground";
import Container from "../components/Container";
import Carousel from "../components/Carousel";
import Content from "../components/Content";

import MarvelImage from "../assets/images/marvelBackground2.jpg";

const List: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacterDTO[]>([]);

  const baseURL = "https://gateway.marvel.com/v1/public/characters?";

  const publicKey = "64b6c1119210a18f2b4daae410828f16";
  const privateKey = "e620ec82462ac1a9d9fda4cbade6f9ecdeaa9244";
  const time = Date.now();

  const hash = md5(time + privateKey + publicKey);

  const handleLoadCharacters = useCallback(async () => {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
    );

    setCharacters(response.data.data.results);
    console.log(response.data.data.results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleLoadCharacters();
  }, [handleLoadCharacters]);

  return (
    <Container>
      <ImageBackground imageURL={MarvelImage} />

      <Content>
        <Flex width="inherit" paddingY="20">
          <Carousel items={characters} />
        </Flex>
      </Content>
    </Container>
  );
};

export default List;
