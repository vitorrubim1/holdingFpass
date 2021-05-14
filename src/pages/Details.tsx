import { useEffect, useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useMarvel } from "../hooks/marvel";

import Content from "../components/Content";
import Container from "../components/Container";
import ImageBackground from "../components/ImageBackground";

interface ParamsProps {
  id: string;
  type: "comics" | "characters";
}

const Details: React.FC = () => {
  const [image, setImage] = useState("");

  const { handleGetCharacterOrComicInfo, searchedCharacter } = useMarvel();
  const { id, type } = useParams<ParamsProps>();

  useEffect(() => {
    if (searchedCharacter) {
      setImage(
        `${searchedCharacter.thumbnail?.path}.${searchedCharacter.thumbnail?.extension}`
      );
    }
  }, [searchedCharacter]);

  useEffect(() => {
    handleGetCharacterOrComicInfo(Number(id), type);
  }, [id, type, handleGetCharacterOrComicInfo]);

  return (
    <Container>
      <ImageBackground imageURL={image} opacity="0.2" />

      <Content>
        {searchedCharacter && (
          <Flex
            align="center"
            flexDirection="column"
            maxWidth="1000px"
            width="inherit"
            marginX="auto"
          >
            <Flex
              boxSize={["xs", "sm"]}
              textAlign="center"
              maxHeight="310px"
              alignItems="center"
              flexDirection="column"
            >
              <Image
                borderRadius={["lg", "md"]}
                name={`{CharacterName}`}
                src={image}
                loading="eager"
                boxSize="300px"
              />
              <Text paddingTop="3" fontWeight="bold" fontSize="larger">
                {searchedCharacter.title || searchedCharacter.name}
              </Text>
            </Flex>

            <Flex padding={["10", "16"]} marginTop="10">
              {searchedCharacter?.description
                ? searchedCharacter?.description
                : "has no description"}
            </Flex>
          </Flex>
        )}
      </Content>
    </Container>
  );
};

export default Details;
