"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { AiringAnime } from "@/types/airing";

interface AnimeCardProps {
  anime: AiringAnime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const loading = true;

  return (
    <Card className="p-0 pr-4 md:p-2 md:pr-4 flex gap-4 max-h-[258px]">
      {/* img and rate */}
      <figure className="relative min-w-[140px] min-h-[200px] max-w-[140px] max-h-[200px]  md:min-w-[180px] md:min-h-[240px] md:max-w-[180px] md:max-h-[240px] bg-primary rounded-lg shadow-lg">
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-4 bottom-2 text-white">
          | <span className="text-sm">PG-13</span>
        </div>
      </figure>
      {/* infomation */}
      <div className="w-full flex flex-col py-2 gap-2">
        {/* status info */}
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="ml-[-4px] text-sx md:text-sm">
            {anime.status}
          </Badge>
          <div className="text-xs">
            <span className="hidden md:inline">{new Date(anime.aired.from).getFullYear()}</span>
            <span className="hidden md:inline text-muted-foreground"> | </span>
            {anime.episodes} episodes
          </div>
        </div>
        <div></div>
        {/* name and description */}
        <div className="flex flex-grow items-start">
          <div className="flex flex-col">
            {/* Mobile */}
            <span className="block md:hidden text-base font-semibold">
              {anime.title.length > 20
                ? `${anime.title.slice(0, 20)}...`
                : anime.title}
            </span>
            {/* Tablet, Desktop */}
            <span className="hidden md:block text-xl font-semibold">
              {anime.title.length > 30
                ? `${anime.title.slice(0, 40)}...`
                : anime.title}
            </span>

            {/* Mobile */}
            <span className="block md:hidden text-xs text-muted-foreground">
              {anime.synopsis.slice(0, 50)}...
            </span>
            {/* Tablet, Desktop */}
            <span className="hidden md:block text-xs text-muted-foreground">
              {anime.synopsis.slice(0, 100)}...
            </span>
          </div>
        </div>
        {/* rate and ranking */}
        <div className="w-full flex gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <StarFilledIcon color="yellow" />{" "}
              <span className="text-sm">{anime.score}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {anime.scored_by} users
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm"># {anime.rank}</span>
            <span className="text-xs text-muted-foreground">Ranking</span>
          </div>
        </div>
        {/* genre tag */}
        <div className="flex gap-2 md:hidden">
          {anime.genres.slice(0, 2).map((genre) => (
            <Badge key={genre.name} variant="secondary">
              {genre.name}
            </Badge>
          ))}
          {anime.genres.length > 2 && (
            <Badge variant="secondary">+{anime.genres.length - 2}</Badge>
          )}
        </div>
        <div className="hidden md:flex gap-2">
          {anime.genres.slice(0, 3).map((genre) => (
            <Badge key={genre.name} variant="secondary">
              {genre.name}
            </Badge>
          ))}
          {anime.genres.length > 3 && (
            <Badge variant="secondary">+{anime.genres.length - 3}</Badge>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AnimeCard;
