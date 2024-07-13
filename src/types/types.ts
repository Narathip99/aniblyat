export interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  coverImage: {
    large: string;
  };
}

export interface AnimeListData {
  Page: {
    media: Anime[];
  };
}
