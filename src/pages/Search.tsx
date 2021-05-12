import {
  Flex,
  Text,
  Stack,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import Content from "../components/Content";
import Container from "../components/Container";
import ImageBackground from "../components/ImageBackground";
import Button from "../components/Button";

import MarvelImage from "../assets/images/marvelBackground.jpg";
import Input from "../components/Input";
import Card from "../components/Card";

const Search: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <ImageBackground imageURL={MarvelImage} />

      <Content>
        <Flex justify="center" width="inherit">
          <Stack spacing={5}>
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

            <Button onClick={() => history.push("/list")}>See all</Button>

            {false && (
              <Card
                imageUrl="https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                key={3}
                name="teste"
              />
            )}
          </Stack>
        </Flex>
      </Content>
    </Container>
  );
};

export default Search;
