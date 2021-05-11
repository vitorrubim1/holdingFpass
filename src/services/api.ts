import axios from "axios";

export const marvelApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MARVEL_URL,
});

marvelApi.defaults.params = {
  ts: 1,
  apikey: process.env.NEXT_PUBLIC_MARVEL_KEY,
  hash: process.env.NEXT_PUBLIC_MARVEL_HASH,
  orderBy: "-modified",
};
