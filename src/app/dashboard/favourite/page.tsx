import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Favourites',
    description: 'Favourites Pokemons'
 }


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favourites Pokemons<small className="text-blue-500">Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
