import { SimplePokemon } from "@/app/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "../middlewares/local-storage-middleware";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  "1": { id: "1", name: "Bulbasaur" },
  "6": { id: "6", name: "Charizard" },
  "8": { id: "8", name: "Wartortle" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toogleFavourite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state[id]) {
        delete state[id];
        return;
      }
      state[id] = pokemon;
    },
  }
});

export const { toogleFavourite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
