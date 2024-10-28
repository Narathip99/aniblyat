export interface AiringAnime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  synopsis: string;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string | null;
  };
  episodes: number;
  score: number;
  scored_by: number;
  rank: number;
  genres: Array<{ name: string }>;
  rating: string;
}

export interface AiringAnimeResponse {
  data: AiringAnime[];
}
