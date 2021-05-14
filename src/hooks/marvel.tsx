import { useCallback, useState, useContext, createContext } from "react";

import { api } from "../services/api";
import { ICharacterDTO } from "../dtos/ICharacterDTO";
import { IComicsDTO } from "../dtos/IComicsDTO";

interface MarvelContextData {
  characters: ICharacterDTO[];
  comics: IComicsDTO[];
  searchedCharacter: IComicsDTO | undefined;
  error: boolean;
  loading: boolean;

  handleLoadCharactersAndComics(): void;
  handleSearchCharacter(value: string): void;
  handleLoadMore(type: "characters" | "comics"): void;
  handleGetCharacterOrComicInfo(id: number, type: string): void;
}

export const MarvelContext = createContext({} as MarvelContextData);

const MarvelProvider: React.FC = ({ children }) => {
  const [characters, setCharacters] = useState<ICharacterDTO[]>([]);
  const [comics, setComics] = useState<IComicsDTO[]>([]);
  const [searchedCharacter, setSearchedCharacter] = useState(
    {} as IComicsDTO | undefined
  );
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleStopLoading = useCallback(() => {
    setTimeout(
      () => {
        setLoading(false);
      },
      200,
      []
    );
  }, []);

  const handleLoadCharactersAndComics = useCallback(async () => {
    try {
      setLoading(true);

      const responseCharacter = await api.get("characters");
      setCharacters(responseCharacter.data.data.results);

      const responseComics = await api.get("comics");
      setComics(responseComics.data.data.results);

      handleStopLoading();
    } catch (error) {
      handleStopLoading();
      setError(true);
    }
  }, [handleStopLoading]);

  const handleSearchCharacter = useCallback(
    async (value: string) => {
      try {
        setLoading(true);
        const response = await api.get("characters", {
          params: { name: value },
        });

        if (response.data.data.results[0]) {
          setSearchedCharacter(response.data.data.results[0]);
          setError(false);
        } else {
          setSearchedCharacter(undefined);
          setError(true);
        }

        handleStopLoading();
      } catch (error) {
        handleStopLoading();
        setError(true);
      }
    },
    [handleStopLoading]
  );

  const handleLoadMore = useCallback(
    async (type: "characters" | "comics") => {
      try {
        if (type === "characters") {
          const offset = characters.length;
          const response = await api.get("characters", {
            params: {
              offset,
            },
          });

          setCharacters([...characters, ...response.data.data.results]);
        }

        if (type === "comics") {
          const offset = comics.length;
          const response = await api.get("comics", {
            params: {
              offset,
            },
          });

          setComics([...comics, ...response.data.data.results]);
        }
      } catch (error) {
        handleStopLoading();
        setError(true);
      }
    },
    [comics, characters, handleStopLoading]
  );

  const handleGetCharacterOrComicInfo = useCallback(
    async (id: number, type: string) => {
      try {
        setLoading(true);

        const response = await api.get(`${type}/${id}`);
        setSearchedCharacter(response.data.data.results[0]);

        handleStopLoading();
      } catch (error) {
        handleStopLoading();
        setError(true);
      }
    },
    [handleStopLoading]
  );

  return (
    <MarvelContext.Provider
      value={{
        searchedCharacter,
        characters,
        loading,
        comics,
        error,

        handleLoadCharactersAndComics,
        handleGetCharacterOrComicInfo,
        handleSearchCharacter,
        handleLoadMore,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

function useMarvel(): MarvelContextData {
  const context = useContext(MarvelContext);

  if (!context) {
    throw new Error("useMarvel must be used within a MarvelProvider");
  }

  return context;
}

export { MarvelProvider, useMarvel };
