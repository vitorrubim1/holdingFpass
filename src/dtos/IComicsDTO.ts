export interface IComicsDTO {
  character: {
    available: number;
    collectionURI: string;
  };
  description: string;
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
  name: string;
  variants: [{ name: string; resourceURI: string }];
}
