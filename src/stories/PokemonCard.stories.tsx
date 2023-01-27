import PokemonCard from "../components/PokemonCard";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Pokemon/Card',
    component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = (args) => <PokemonCard {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    name: "Ditto",
    base_experience: 101,
    moves: [{name: 'transform', url: 'https://pokeapi.co/api/v2/move/144/'}],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
}

