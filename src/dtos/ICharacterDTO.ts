export interface ICharacterDTO {
  comics: {
    available: number;
    collectionURI: string;
  };
  id: number;
  description: string;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };

  items: [{ name: string; resourceURI: string }];
  series: {
    available: number;
    collectionURI: string;

    items: [{ name: string; resourceURI: string }];
  };
  stories: {
    available: number;
    collectionURI: string;
    items: [{ name: string; resourceURI: string; type: string }];
  };
  urls: [{ type: string; url: string }];
}
