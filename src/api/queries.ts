import { gql } from "@apollo/client";

export const GET_TRENDING_ANIME = gql`
  query {
    Page(page: 1, perPage: 10) {
      media(sort: TRENDING_DESC, type: ANIME) {
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
        averageScore
        status
        format
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
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
        duration
        siteUrl
        description
      }
    }
  }
`;

export const GET_POPULAR_THIS_SEASON = gql`
  query {
    Page(page: 1, perPage: 10) {
      media(season: SUMMER, sort: POPULARITY_DESC, type: ANIME) {
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
        averageScore
        status
        format
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
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
        duration
        siteUrl
        description
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
        averageScore
        status
        format
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
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
        duration
        siteUrl
        description
      }
    }
  }
`;
