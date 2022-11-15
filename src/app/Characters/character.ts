import { Film } from "../film";

export interface Character {
    name: string;
    gender: string;
    birth_year: string;
    films: Film[];
    filmIds: number[];
    url: string;
  }
