import { useCallback, useEffect, useState } from "react";
import {
  Flex,
  Text,
  Stack,
  InputGroup,
  InputRightElement,
  Divider,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import { useMarvel } from "../hooks/marvel";

import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import Content from "../components/Content";
import Container from "../components/Container";
import ImageBackground from "../components/ImageBackground";

import MarvelImage from "../assets/images/marvelBackground.jpg";
import Loading from "../components/Loading";

const Search: React.FC = () => {
  const [wantedCharacter, setWantedCharacter] = useState("");
  const [wasSearched, setWasSearched] = useState(false);

  const { handleSearchCharacterAndComic, searchedCharacter, error, loading } =
    useMarvel();
  const history = useHistory();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      console.log("got here");
      console.log(
        event.target[0].defaultValue.replaceAll("-", "").toLowerCase()
      );

      handleSearchCharacterAndComic(wantedCharacter);
      console.log(searchedCharacter);

      if (searchedCharacter) {
        setWasSearched(true);
      } else {
        setWasSearched(false);
      }
    },
    [handleSearchCharacterAndComic, wantedCharacter, searchedCharacter]
  );

  useEffect(() => {
    if (wantedCharacter === "") {
      setWasSearched(false);
    }
  }, [wantedCharacter]);

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

            <InputGroup as="form" onSubmit={handleSubmit}>
              <Input
                value={wantedCharacter}
                onChange={(event) =>
                  setWantedCharacter(
                    event.target.value.replaceAll("-", "").toLowerCase()
                  )
                }
                name="searchCharacter"
                placeholder="Search for a character"
                isRequired
              />
              <InputRightElement width="3rem">
                <Button type="submit">
                  <AiOutlineSearch />
                </Button>
              </InputRightElement>
            </InputGroup>

            <Divider />

            <Button onClick={() => history.push("/list")}>See all</Button>

            { loading && wasSearched && <Loading />}

            {!loading &&
              wasSearched &&
              wantedCharacter &&
              searchedCharacter && (
                <Card
                  imageUrl={`${searchedCharacter.thumbnail?.path}.${searchedCharacter.thumbnail?.extension}`}
                  key={searchedCharacter.id}
                  name={searchedCharacter.title}
                />
              )}

            {error && (
              <Alert status="error" color="gray.600">
                <AlertIcon />
                There was an error processing your request
              </Alert>
            )}
          </Stack>
        </Flex>
      </Content>
    </Container>
  );
};

export default Search;
