"use client";

import React, { useState } from "react";
import { PokemonGrid } from "..";
import { useAppSelector } from "@/app/store";
import { IoHeartOutline } from "react-icons/io5";

export const FavouritesPokemons = () => {
  const favouritePokemons = useAppSelector((state) => state.pokemonsReducer);
  const dataArray = [];

  for (const key in favouritePokemons) {
    if (favouritePokemons.hasOwnProperty(key)) {
      const item = favouritePokemons[key];
      dataArray.push(item);
    }
  }
  
  return (
    <>
      {dataArray.length === 0 ? (
        <NoFavourites />
      ) : (
        <PokemonGrid pokemons={Object.values(favouritePokemons)} />
      )}
    </>
  );
};

export const NoFavourites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No Favourites Pokemons</span>
    </div>
  );
};
