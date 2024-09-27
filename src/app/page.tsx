"use client";
import AnimeCard from "@/components/AnimeCard";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section className="container mx-auto">
        <h1>Airing</h1>
        <div className="grid grid-cols-3 gap-4">
          <AnimeCard />
          <AnimeCard />
          <AnimeCard />
        </div>
      </section>
    </React.Fragment>
  );
}
