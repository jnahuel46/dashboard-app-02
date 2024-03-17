import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";

const getPokemons = async (
  limit = 150,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    //revalidate all the server side components after that cron 
    {
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon: any) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  //throw new Error("testing");

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons List <small className="text-blue-500">Static</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
