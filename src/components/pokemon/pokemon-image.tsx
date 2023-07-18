import { component$ } from "@builder.io/qwik";

interface Props {
  id: number;
  size?: number;
  isBackImage: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 200, isBackImage = false }: Props) => {
    const backImage = isBackImage ? "/back" : "";
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${backImage}/${id}.png`;

    return <img src={imgUrl} alt="Pokemon Sprite" width={size} height={size} />;
  }
);
