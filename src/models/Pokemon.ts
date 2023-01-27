import {PokemonMove} from "@/models/PokemonMove";

export interface Pokemon {
    name: string;
    base_experience: number;
    moves: PokemonMove[];
    image: string;
}