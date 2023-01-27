import React from "react";
import {Pokemon} from "@/models/Pokemon";
import PokemonCard from "@/components/PokemonCard";
import {fetchPokemon} from "../../../testData";

const HomeContainer: React.FC = () => {

    const pokemon: Pokemon[] = fetchPokemon();

    return (
        <HomePresentation pokemon={pokemon}/>
    )
}

interface HomePresentationProps {
    pokemon: Pokemon[];
}

const HomePresentation: React.FC<HomePresentationProps> = ({pokemon}) => {
    React.useEffect(() => {
        console.log("POKE: ", pokemon);
    }, [pokemon]);
    return (
        <div>
            <h1>Pokemon Cards</h1>
            {
            pokemon.map((p, index) => {
                return (
                    <PokemonCard key={index} name={p.name} base_experience={p.base_experience} moves={p.moves}
                                 image={p.image}/>
                )
            })}
        </div>
    )
}

export default HomeContainer;