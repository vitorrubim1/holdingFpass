import { useCallback, useState, useContext, createContext } from "react";
import md5 from "md5";

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

  const publicKey = "64b6c1119210a18f2b4daae410828f16";
  const privateKey = "e620ec82462ac1a9d9fda4cbade6f9ecdeaa9244";
  const time = Date.now();

  const hash = md5(time + privateKey + publicKey);

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
      const response = await api.get(
        `characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
      );

      setCharacters(response.data.data.results);
      handleStopLoading();
    } catch (error) {
      setError(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadComics = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(
        `comics?ts=${time}&apikey=${publicKey}&hash=${hash}`
      );

      setComics(response.data.data.results);
      handleStopLoading();
    } catch (error) {
      setError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchCharacterAndComic = useCallback(async (value: string) => {
    try {
      setLoading(true);
      const response = await api.get(
        `comics?ts=${time}&apikey=${publicKey}&hash=${hash}`,
        { params: { titleStartsWith: value } }
      );

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
