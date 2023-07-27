import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
  id: number;
  size?: number;
  isBackImage: boolean;
  isVisible?: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 200, isBackImage = false, isVisible = true }: Props) => {
    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
      track(() => id);
      imageLoaded.value = false;
    });

    const backImage = isBackImage ? "/back" : "";
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${backImage}/${id}.png`;

    return (
      <div
        class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {!imageLoaded.value && <span>Loading...</span>}
        <img
          src={imgUrl}
          alt="Pokemon Sprite"
          width={size}
          height={size}
          onLoad$={() => (imageLoaded.value = true)}
          class={[
            { hidden: !imageLoaded.value, "brightness-0": !isVisible },
            "transition-all",
          ]}
        />
      </div>
    );
  }
);
