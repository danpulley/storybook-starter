import {Pokemon} from "@/models/Pokemon";
import fetch from "node-fetch";

export const fetchPokemonByName = async (name: string): Promise<Pokemon[]> => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.json();
    } catch (e) {
        console.error("Error fetching pokemon: ", e);
        return Promise.reject(e);
    }
}