import { useEffect, useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useMarvel } from "../hooks/marvel";

import Content from "../components/Content";
import Container from "../components/Container";
import ImageBackground from "../components/ImageBackground";
import Loading from "../components/Loading";
import StoryCard from "../components/StoryCard";
import BoxCard from "../components/StoryCard/BoxCard";
import GoBack from "../components/GoBack";

interface ParamsProps {
  id: string;
  type: "comics" | "characters";
}

const Details: React.FC = () => {
  const [image, setImage] = useState("");

  const { id, type } = useParams<ParamsProps>();
  const { handleGetCharacterOrComicInfo, searchedCharacter, loading } =
    useMarvel();

  useEffect(() => {
    if (searchedCharacter && !loading) {
      setImage(
        `${searchedCharacter.thumbnail?.path}.${searchedCharacter.thumbnail?.extension}`
      );
    }
  }, [searchedCharacter, loading]);

  useEffect(() => {
    handleGetCharacterOrComicInfo(Number(id), type);
  }, [id, type, handleGetCharacterOrComicInfo]);

  return (
    <Container>
      <ImageBackground imageURL={image} opacity="0.1" />

      <Content>
        {loading && <Loading />}

        {searchedCharacter && !loading && (
          <Flex
            flexDirection="column"
            maxWidth="1000px"
            width="inherit"
            marginX="auto"
            position="relative"
          >
            <GoBack to="/" />

            <Flex
              boxSize={["xs", "sm"]}
              marginX="auto"
              align="center"
              textAlign="center"
              maxHeight="310px"
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

            <Flex marginTop={["20", "10"]} paddingY="16">
              {searchedCharacter?.description
                ? searchedCharacter?.description
                : "has no description"}
            </Flex>

            {searchedCharacter.stories && (
              <StoryCard sectionLabel="Stories">
                {searchedCharacter.stories.items.map((story) => (
                  <BoxCard label={story.name} />
                ))}
              </StoryCard>
            )}
          </Flex>
        )}
      </Content>
    </Container>
  );
};

export default Details;
