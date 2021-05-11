import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { BsPlus } from "react-icons/bs";

import Button from "./Button";

interface CardProps {
  key: number;
  imageUrl: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, name, key }) => {
  const history = useHistory();

  return (
    <Box
      maxWidth="400px"
      borderRadius="md"
      overflow="hidden"
      marginRight={["1", "5"]}
      background="gray.300"
      key={key}
    >
      <Image src={imageUrl} alt={`${name} character`} />

      <Flex
        align="center"
        flexDirection="column"
        p="4"
        background="gray.50"
        opacity="0.8"
      >
        <Text
          fontWeight="black"
          textTransform="capitalize"
          fontSize={["medium", "larger"]}
          color="gray.800"
          marginBottom="2"
        >
          {name}
        </Text>

        <Button onClick={() => history.push("/details")}>
          <BsPlus size={20} />
          Ver mais informações
        </Button>
      </Flex>
    </Box>
  );
};

export default Card;
