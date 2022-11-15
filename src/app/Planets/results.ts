import { Planet } from "./planet";


export interface Results {
    count: number;
    next: string | null;
    previous: string | null;
    results: Planet[];


}