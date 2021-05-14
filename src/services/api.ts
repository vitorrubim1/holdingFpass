import axios from "axios";
import md5 from "md5";

const publicKey = "64b6c1119210a18f2b4daae410828f16";
const privateKey = "e620ec82462ac1a9d9fda4cbade6f9ecdeaa9244";
const time = Date.now();

const hash = md5(time + privateKey + publicKey);

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: time,
    apikey: publicKey,
    hash
  }
});
