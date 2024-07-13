import React from "react";

// types
import { AnimeListData } from "@/types/types";

// api
import { useQuery } from "@apollo/client";
import {
  GET_TRENDING_ANIME,
  GET_POPULAR_THIS_SEASON,
  GET_UPCOMING_NEXT_SEASON,
} from "@/api/queries";

// components
import MultiCaraousel from "@/components/MultiCaraousel";
import { Skeleton } from "@/components/ui/skeleton";

const Home: React.FC = () => {
  const {
    loading: trendingLoading,
    error: trendingError,
    data: trendingData,
  } = useQuery<AnimeListData>(GET_TRENDING_ANIME);
  const {
    loading: popularLoading,
    error: popularError,
    data: popularData,
  } = useQuery<AnimeListData>(GET_POPULAR_THIS_SEASON);
  const {
    loading: upcomingLoading,
    error: upcomingError,
    data: upcomingData,
  } = useQuery<AnimeListData>(GET_UPCOMING_NEXT_SEASON);

  if (trendingLoading || popularLoading || upcomingLoading)
    return (
      <div className="container grid grid-cols-6 py-8 gap-x-4 gap-y-16 ">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[300px] w-[210px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
            </div>
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[300px] w-[210px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
            </div>
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[300px] w-[210px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
            </div>
          </div>
        ))}
      </div>
    );
  if (trendingError) return <p>Error: {trendingError.message}</p>;
  if (popularError) return <p>Error: {popularError.message}</p>;
  if (upcomingError) return <p>Error: {upcomingError.message}</p>;

  return (
    <main className="container">
      <section className="py-4">
        <h2 className="text-xl font-medium">Trending Now</h2>
        <div className="pt-4">
          <MultiCaraousel animes={trendingData?.Page.media} />
        </div>
      </section>
      <section className="py-4">
        <h2 className="text-xl font-medium">Popular This Season</h2>
        <div className="pt-4">
          <MultiCaraousel animes={popularData?.Page.media} />
        </div>
      </section>
      <section className="py-4">
        <h2 className="text-xl font-medium">Upcoming Next Season</h2>
        <div className="pt-4">
          <MultiCaraousel animes={upcomingData?.Page.media} />
        </div>
      </section>
    </main>
  );
};

export default Home;
