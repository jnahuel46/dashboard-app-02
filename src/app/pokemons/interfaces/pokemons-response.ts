export interface PokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: [];
}

export interface Result {
  name: string;
  url: string;
}
