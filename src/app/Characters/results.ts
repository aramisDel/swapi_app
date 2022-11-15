import { Character } from "./character";

export interface Results {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[];


}