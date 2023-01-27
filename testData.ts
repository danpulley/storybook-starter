import {Pokemon} from "@/models/Pokemon";

const pokemonList: Pokemon[] = [
    {
        name: "ditto",
        base_experience: 101,
        moves: [
            {name: 'transform', url: 'https://pokeapi.co/api/v2/move/144/'}
        ],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    }
];

export const fetchPokemon = (): Pokemon[] => {
    return pokemonList;
}

