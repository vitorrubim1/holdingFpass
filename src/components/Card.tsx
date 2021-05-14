import { Box, Image, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { BsPlus } from "react-icons/bs";

import Button from "./Button";

interface CardProps {
  type: "character" | "comic";
  key: number | string;
  id: number;
  imageUrl: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, name, key, type, id }) => {
  const history = useHistory();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      maxWidth="360px"
      borderRadius="md"
      marginRight={["1", "3"]}
      key={key}
      _hover={{
        borderLeft: "1px",
        transform: "scale(1.03)",
      }}
      transition="ease-in-out"
      transitionDuration="200ms"
    >
      <Box maxHeight="210px" background="white">
        <Image src={imageUrl} alt={`${name} character`} />
      </Box>

      <Flex
        align="center"
        flexDirection="column"
        p="4"
        background="gray.100"
        opacity="0.9"
      >
        <Text
          fontWeight="black"
          textTransform="capitalize"
          fontSize={["medium", "larger"]}
          color="gray.800"
          marginBottom="2"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {`${name ? name.substr(0, 20) : "no name :("}`}
        </Text>

        <Button
          onClick={() => {
            history.push(`/details/${type}/${id}`);
          }}
          alignItems="center"
        >
          <BsPlus size={20} />
          <Text marginLeft="1">
            {isWideVersion ? "See more information" : "See more"}
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default Card;
