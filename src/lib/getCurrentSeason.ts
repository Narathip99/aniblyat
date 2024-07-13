export default function getCurrentSeasonAndYear() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let season: "WINTER" | "SPRING" | "SUMMER" | "FALL";

  if (month >= 1 && month <= 3) {
    season = "WINTER";
  } else if (month >= 4 && month <= 6) {
    season = "SPRING";
  } else if (month >= 7 && month <= 9) {
    season = "SUMMER";
  } else {
    season = "FALL";
  }

  return { season, seasonYear: year };
}
