import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_UPCOMING_NEXT_SEASON } from "@/api/queries";
import { AnimeListData, Anime } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import getCurrentSeasonAndYear from "@/lib/getCurrentSeason";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

// ฟังก์ชันสำหรับการตัดข้อความ
const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const UpcomingNextSeason: React.FC = () => {
  const { nextSeason, nextSeasonYear } = getCurrentSeasonAndYear();
  const [page, setPage] = useState(1);
  const [allAnimes, setAllAnimes] = useState<Anime[]>([]);
  const { loading, error, data, fetchMore } = useQuery<AnimeListData>(
    GET_UPCOMING_NEXT_SEASON,
    {
      variables: {
        season: nextSeason,
        seasonYear: nextSeasonYear,
        perPage: 100,
        page,
      },
    }
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data?.Page?.media) {
      setAllAnimes((prevAnimes) => {
        const newAnimes = data.Page.media.filter(
          (anime) => !prevAnimes.some((a) => a.id === anime.id)
        );
        return [...prevAnimes, ...newAnimes];
      });
    }
  }, [data]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && data?.Page?.pageInfo.hasNextPage) {
          setPage((prevPage) => prevPage + 1);
          fetchMore({
            variables: {
              page: data.Page.pageInfo.currentPage + 1,
            },
          });
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [data]);

  if (loading && page === 1) {
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

  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="container">
      <section className="py-4">
        <h2 className="text-2xl font-medium text-zinc-500">
          Upcoming Next Season
        </h2>
        <div className="pt-4 grid grid-cols-6 gap-4">
          {allAnimes.map((anime) => (
            <HoverCard key={anime.id}>
              <HoverCardTrigger>
                <div>
                  <figure className="relative w-full h-[300px] overflow-hidden">
                    <img
                      src={anime.coverImage.large}
                      alt={anime.title.romaji}
                      className="absolute w-full h-full object-cover"
                    />
                  </figure>
                  <p className="mt-2 text-zinc-500 text-base font-medium">
                    {truncateText(anime.title.romaji, 50)}
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="p-4 bg-white shadow-lg rounded-md">
                  <div className="flex">
                    <p className="text-lg font-medium">
                      {anime.nextAiringEpisode
                        ? `Ep ${
                            anime.nextAiringEpisode.episode
                          } airing in ${Math.floor(
                            anime.nextAiringEpisode.timeUntilAiring / 86400
                          )} days`
                        : "N/A"}
                    </p>
                  </div>
                  <div className="text-sm flex gap-4 mt-2 mb-4">
                    <p>{anime.format}</p>
                    <p>{anime.episodes} episodes</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {anime.genres.map((genre) => (
                      <Badge key={genre}>{genre}</Badge>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        <div ref={loadMoreRef} className="h-10"></div>
      </section>
    </main>
  );
};

export default UpcomingNextSeason;
