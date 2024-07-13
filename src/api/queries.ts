import { gql } from "@apollo/client";
import getCurrentSeasonAndYear from "@/lib/getCurrentSeason";

const {
  season,
  seasonYear: year,
  nextSeason,
  nextSeasonYear,
} = getCurrentSeasonAndYear();

console.log(
  "season",
  season,
  "year",
  year,
  "nextSeason",
  nextSeason,
  "nextSeasonYear",
  nextSeasonYear
);

export const GET_POPULAR_THIS_SEASON = gql`
  query GetPopularThisSeason(
    $season: MediaSeason
    $seasonYear: Int
    $perPage: Int
  ) {
    Page(page: 1, perPage: $perPage) {
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
      pageInfo {
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`;

export const GET_UPCOMING_NEXT_SEASON = gql`
  query GetUpcomingNextSeason(
    $season: MediaSeason
    $seasonYear: Int
    $perPage: Int
  ) {
    Page(page: 1, perPage: $perPage) {
      media(
        season: $season
        seasonYear: $seasonYear
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
      pageInfo {
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`;
