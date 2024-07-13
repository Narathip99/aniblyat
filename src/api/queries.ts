import { gql } from "@apollo/client";
import getCurrentSeasonAndYear from "@/lib/getCurrentSeason";

const { season, seasonYear } = getCurrentSeasonAndYear();

console.log(season, seasonYear);

export const GET_POPULAR_THIS_SEASON = gql`
  query GetPopularThisSeason($season: MediaSeason, $seasonYear: Int) {
    Page(page: 1, perPage: 10) {
      media(
        season: $season
        seasonYear: $seasonYear
        type: ANIME
        status: RELEASING
        sort: POPULARITY_DESC
        isAdult: false
      ) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
        episodes
        format
        nextAiringEpisode {
          timeUntilAiring
          episode
        }
        studios {
          nodes {
            name
          }
        }
        genres
      }
    }
  }
`;

export const GET_UPCOMING_NEXT_SEASON = gql`
  query {
    Page(page: 1, perPage: 10) {
      media(
        season: FALL
        seasonYear: 2024
        sort: POPULARITY_DESC
        type: ANIME
      ) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
        episodes
        format
        nextAiringEpisode {
          timeUntilAiring
          episode
        }
        studios {
          nodes {
            name
          }
        }
        genres
      }
    }
  }
`;
