import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "../components/pokemon/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal(1); // primitivos
  const showBackImage = useSignal(false);
  const showPokemon = useSignal(false);

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });

  return (
    <>
      <span class="text-2xl">Simple Search</span>
      <span class="text-9xl">{pokemonId}</span>
      <PokemonImage
        id={pokemonId.value}
        size={200}
        isBackImage={showBackImage.value}
        isVisible={showPokemon.value}
      />
      <div>
        <button
          onClick$={() => changePokemonId(-1)}
          class="btn btn-primary mr-2"
        >
          Previous
        </button>
        <button
          onClick$={() => changePokemonId(+1)}
          class="btn btn-primary mr-2"
        >
          Next
        </button>
        <button
          onClick$={() => (showBackImage.value = !showBackImage.value)}
          class="btn btn-primary mr-2"
        >
          Turn around
        </button>
        <button
          onClick$={() => (showPokemon.value = !showPokemon.value)}
          class="btn btn-primary"
        >
          Unveil
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "My first app in Qwik",
    },
  ],
};
