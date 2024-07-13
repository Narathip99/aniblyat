export default function getCurrentSeasonAndYear() {
  const date = new Date();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const year = date.getFullYear();

  let season: "WINTER" | "SPRING" | "SUMMER" | "FALL";
  let nextSeason: "WINTER" | "SPRING" | "SUMMER" | "FALL";
  let nextSeasonYear = year;

  if (month >= 1 && month <= 3) {
    season = "WINTER";
    nextSeason = "SPRING";
  } else if (month >= 4 && month <= 6) {
    season = "SPRING";
    nextSeason = "SUMMER";
  } else if (month >= 7 && month <= 9) {
    season = "SUMMER";
    nextSeason = "FALL";
  } else {
    season = "FALL";
    nextSeason = "WINTER";
    nextSeasonYear = year + 1;
  }

  return { season, seasonYear: year, nextSeason, nextSeasonYear };
}
