import {
  Flex,
  Text,
  Stack,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

import Content from "../components/Content";
import Container from "../components/Container";
import ImageBackground from "../components/ImageBackground";
import Button from "../components/Button";

import MarvelImage from "../assets/images/marvelBackground.jpg";
import Input from "../components/Input";

const Search: React.FC = () => {
  return (
    <Container>
      <ImageBackground imageURL={MarvelImage} />

      <Content>
        <Flex justify="center" width="inherit">
          <Stack spacing={4}>
            <Text
              textShadow="1px 1px 1px #3182CE"
              margin="6"
              fontWeight="bold"
              fontSize={["xx-large", "xxx-large"]}
            >
              MySuperHero
            </Text>

            <InputGroup as="form">
              <Input
                name="searchCharacter"
                placeholder="Search for a character"
              />
              <InputRightElement width="3rem">
                <Button>
                  <AiOutlineSearch />
                </Button>
              </InputRightElement>
            </InputGroup>

            <Divider />

            <Button colorScheme="purple">See all</Button>
          </Stack>
        </Flex>
      </Content>
    </Container>
  );
};

export default Search;
