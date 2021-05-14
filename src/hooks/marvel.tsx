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

  handleLoadCharacters(): void;
  handleLoadComics(): void;
  handleSearchCharacterAndComic(value: string): void;
  handleLoadMoreCharacters(): void;
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

  const handleLoadCharacters = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("characters");

      setCharacters(response.data.data.results);
      handleStopLoading();
    } catch (error) {
      handleStopLoading();
      setError(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadComics = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("comics");

      setComics(response.data.data.results);
      handleStopLoading();
    } catch (error) {
      handleStopLoading();
      setError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchCharacterAndComic = useCallback(async (value: string) => {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMoreCharacters = useCallback(async () => {
    try {
      const offset = characters.length;

      const response = await api.get("characters", {
        params: {
          offset,
        },
      });

      setCharacters([...characters, ...response.data.data.results]);
    } catch (error) {
      handleStopLoading();
      setError(true);
    }
  }, [characters, handleStopLoading]);

  return (
    <MarvelContext.Provider
      value={{
        characters,
        comics,
        searchedCharacter,
        error,
        loading,

        handleLoadCharacters,
        handleLoadComics,
        handleSearchCharacterAndComic,
        handleLoadMoreCharacters,
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
