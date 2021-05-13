import { useCallback, useState, useContext, createContext } from "react";
import md5 from "md5";

import { api } from "../services/api";
import { ICharacterDTO } from "../dtos/ICharacterDTO";
import { IComicsDTO } from "../dtos/IComicsDTO";

interface MarvelContextData {
  characters: ICharacterDTO[];
  comics: IComicsDTO[];

  handleLoadCharacters(): void;
  handleLoadComics(): void;
}

export const MarvelContext = createContext({} as MarvelContextData);

const MarvelProvider: React.FC = ({ children }) => {
  const [characters, setCharacters] = useState<ICharacterDTO[]>([]);
  const [comics, setComics] = useState<IComicsDTO[]>([]);

  const publicKey = "64b6c1119210a18f2b4daae410828f16";
  const privateKey = "e620ec82462ac1a9d9fda4cbade6f9ecdeaa9244";
  const time = Date.now();

  const hash = md5(time + privateKey + publicKey);

  const handleLoadCharacters = useCallback(async () => {
    const response = await api.get(
      `characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
    );

    setCharacters(response.data.data.results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadComics = useCallback(async () => {
    const response = await api.get(
      `comics?ts=${time}&apikey=${publicKey}&hash=${hash}`
    );

    setComics(response.data.data.results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MarvelContext.Provider
      value={{ characters, comics, handleLoadCharacters, handleLoadComics }}
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
