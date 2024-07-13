import React from "react";

// types
import { Anime } from "@/types/types";

interface MultiCaraouselProps {
  animes: Anime[];
}

// components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

const MultiCaraousel: React.FC<MultiCaraouselProps> = ({ animes }) => {
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {animes.slice(0, 10).map((anime) => (
          <CarouselItem key={anime.id} className="basis-1/6 relative">
            <HoverCard>
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
              </HoverCardContent>
            </HoverCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MultiCaraousel;
