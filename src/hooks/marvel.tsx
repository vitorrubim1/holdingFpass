import { useCallback, useState, useContext, createContext } from "react";

import { api } from "../services/api";
import { ICharacterAndComicDTO } from "../dtos/ICharacterAndComicDTO";

interface MarvelContextData {
  characters: ICharacterAndComicDTO[];
  comics: ICharacterAndComicDTO[];
  searchedCharacter: ICharacterAndComicDTO | null;
  error: boolean;
  loading: boolean;

  handleLoadCharactersAndComics(): void;
  handleSearchCharacter(value: string): void;
  handleLoadMore(type: "characters" | "comics"): void;
  handleGetCharacterOrComicInfo(id: number, type: string): void;
}

export const MarvelContext = createContext({} as MarvelContextData);

const MarvelProvider: React.FC = ({ children }) => {
  const [characters, setCharacters] = useState<ICharacterAndComicDTO[]>([]);
  const [comics, setComics] = useState<ICharacterAndComicDTO[]>([]);
  const [searchedCharacter, setSearchedCharacter] = useState(
    {} as ICharacterAndComicDTO | null
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
      setSearchedCharacter(null);

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
          setSearchedCharacter(null);
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
        setSearchedCharacter(null);

        const response = await api.get(`${type}/${id}`);
        setSearchedCharacter(response.data.data.results[0]);
        console.log(response.data.data.results[0]);

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
