import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type === "pokemons/toogleFavourite") {
      const { pokemonsReducer } = state.getState() as RootState;
      localStorage.setItem(
        "favourite-pokemons",
        JSON.stringify(pokemonsReducer)
      );
    }
  };
};
