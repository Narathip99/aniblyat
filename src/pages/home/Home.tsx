import React from "react";

// types
import { AnimeListData } from "@/types/types";

// api
import { useQuery } from "@apollo/client";
import {
  GET_POPULAR_THIS_SEASON,
  GET_UPCOMING_NEXT_SEASON,
} from "@/api/queries";

// components
import MultiCaraousel from "@/components/MultiCaraousel";
import { Skeleton } from "@/components/ui/skeleton";

// function to get current season and year
import getCurrentSeasonAndYear from "@/lib/getCurrentSeason";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { season, seasonYear } = getCurrentSeasonAndYear();

  const {
    loading: popularLoading,
    error: popularError,
    data: popularData,
  } = useQuery<AnimeListData>(GET_POPULAR_THIS_SEASON, {
    variables: { season, seasonYear },
  });

  const {
    loading: upcomingLoading,
    error: upcomingError,
    data: upcomingData,
  } = useQuery<AnimeListData>(GET_UPCOMING_NEXT_SEASON);

  if (popularLoading || upcomingLoading) {
    return (
      <div className="container grid grid-cols-6 py-8 gap-x-4 gap-y-16">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[300px] w-[210px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (popularError) return <p>Error: {popularError.message}</p>;
  if (upcomingError) return <p>Error: {upcomingError.message}</p>;

  return (
    <main className="container">
      {/* popular this season */}
      <section className="py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-zinc-500">
            Popular This Season
          </h2>
          <Link
            to={`/season/${seasonYear}/${season}`}
            className="text-xs font-medium text-zinc-500"
          >
            View All
          </Link>
        </div>
        <div className="pt-4">
          <MultiCaraousel animes={popularData?.Page.media} />
        </div>
      </section>
      {/* upcoming next season */}
      <section className="py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-zinc-500">
            Upcoming Next Season
          </h2>
          <Link
            to={`/season/${seasonYear}/${season}`}
            className="text-xs font-medium text-zinc-500"
          >
            View All
          </Link>
        </div>

        <div className="pt-4">
          <MultiCaraousel animes={upcomingData?.Page.media} />
        </div>
      </section>
    </main>
  );
};

export default Home;
