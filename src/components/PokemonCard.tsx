import React from "react";
import {PokemonMove} from "@/models/PokemonMove";
import classes from "./PokemonCard.module.css";

interface PokemonCardProps {
    name: string;
    base_experience: number;
    moves: PokemonMove[];
    image: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({name, base_experience, moves, image}) => {
    return (
        <div className={classes.card}>
            <img className={classes.img} src={image} alt={name}/>
            <div>
                <h3>{`Name: ${name}`}</h3>
                <h3>{`Experience: ${base_experience}`}</h3>
                {moves.map((move, index) => {
                    return (
                        <div key={index}>
                            <h3>{`Move ${index + 1}: ${move.name}`}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PokemonCard;