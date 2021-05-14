import { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
  const CharacterImage =
    "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  const { handleGetCharacterOrComicInfo } = useMarvel();
  const { id, type } = useParams<ParamsProps>();

  useEffect(() => {
    handleGetCharacterOrComicInfo(Number(id), type);
  }, [id, type, handleGetCharacterOrComicInfo]);

  return (
    <Container>
      <ImageBackground imageURL={CharacterImage} opacity="0.2" />

      <Content>
        <Flex
          align="center"
          flexDirection="column"
          maxWidth="1000px"
          width="inherit"
          marginX="auto"
        >
          <Box boxSize={["xs", "sm"]} textAlign="center" maxHeight="310px">
            <Image
              borderRadius={["lg", "md"]}
              name={`{CharacterName}`}
              src={CharacterImage}
              loading="eager"
            />
            <Text paddingTop="3" fontWeight="bold" fontSize="larger">
              Miranha
            </Text>
          </Box>

          <Flex padding={["10", "16"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            distinctio amet voluptas saepe quisquam voluptates praesentium
            reiciendis quae iste quis repellendus sed totam illo, quas error
            debitis veniam esse. Veniam. Iure consequuntur est nam, ullam magnam
            facere tenetur quaerat obcaecati labore id eum perferendis debitis
            expedita tempora molestias dolorem assumenda asperiores dolore minus
            iusto ea, rem sint quos accusantium! Placeat. Cupiditate,
            praesentium nobis expedita iste, deleniti, nam quasi nesciunt ipsam
            totam excepturi eos repudiandae. Voluptas explicabo illo nulla
            quaerat voluptatem dolorum maiores, dicta quidem enim commodi
            dolores eveniet incidunt rem. Recusandae ad vero id, minima voluptas
            dolorem? Unde ipsa eveniet incidunt doloremque quaerat fuga.
          </Flex>
        </Flex>
      </Content>
    </Container>
  );
};

export default Details;
