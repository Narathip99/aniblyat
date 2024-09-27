"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "@radix-ui/react-icons";

const AnimeCard = () => {
  return (
    <Card className="p-2 flex gap-4">
      {/* img and rate */}
      <figure className="relative min-w-[180px] min-h-[240px] bg-primary rounded-lg">
        <div className="absolute left-4 bottom-2 text-white">
          | <span className="text-sm">PG-13</span>
        </div>
      </figure>
      {/* infomation */}
      <div className="flex flex-col py-2 gap-2">
        {/* status info */}
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="text-sm">
            Airing
          </Badge>
          <div className="text-xs">
            Fall 2023<span className="text-muted-foreground"> | </span>16
            episodes
          </div>
        </div>
        <div></div>
        {/* name and description */}
        <div className="flex flex-grow items-start">
          <div className="flex flex-col">
            <span className="text-2xl">Anime Name</span>
            <span className="text-xs text-muted-foreground">
              desc Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Commodi, rerum?
            </span>
          </div>
        </div>
        {/* rate and ranking */}
        <div className="w-full flex gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <StarIcon /> <span className="text-sm">4.5</span>
            </div>
            <span className="text-xs text-muted-foreground">5555 users</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm"># 99</span>
            <span className="text-xs text-muted-foreground">Ranking</span>
          </div>
        </div>
        {/* genre tag */}
        <div className="flex gap-2">
          <Badge variant="secondary">Action</Badge>
          <Badge variant="secondary">Comedy</Badge>
          <Badge variant="secondary">Drama</Badge>
          <Badge variant="secondary">+3</Badge>
        </div>
      </div>
    </Card>
  );
};

export default AnimeCard;
