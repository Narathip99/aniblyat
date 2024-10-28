"use client";

import React, { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
import { getAiringAnime } from "@/lib/api";
import { AiringAnime } from "@/types/airing";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [animeList, setAnimeList] = useState<AiringAnime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await getAiringAnime();
        setAnimeList(response.data);
      } catch (error) {
        console.error("Failed to fetch anime:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-4 md:px-0">
        <h1 className="text-3xl font-bold py-4">Airing</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-4">
          <Skeleton className="w-full h-[280px] rounded-xl" />
          <Skeleton className="w-full h-[280px] rounded-xl" />
          <Skeleton className="w-full h-[280px] rounded-xl" />
          <Skeleton className="w-full h-[280px] rounded-xl" />
          <Skeleton className="w-full h-[280px] rounded-xl" />
          <Skeleton className="w-full h-[280px] rounded-xl" />
        </div>
      </section>
    );
  }

  return (
    <React.Fragment>
      <section className="container mx-auto px-4 md:px-0">
        {/* <h1 className="text-3xl font-bold py-4">Airing</h1> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-4">
          {animeList?.slice(0, 24).map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
