"use client";

import usePokemon from "@/hook/usePokemon";
import Image from "next/image";

type Props = {
  pokeName: string;
};
const PokemonPage = ({ pokeName }: Props) => {
  //host/pokemon/[name]
  const { pokemon, pokemonLoading, mutatePokemon } = usePokemon(pokeName);

  if (pokemonLoading) return <div>loading...</div>;

  const pokemon_types: { type: { name: string } }[] | undefined =
    pokemon?.types;

  return (
    <>
      <div>
        {pokemon === null && <p>Pokemon not found</p>}
        {pokemon && (
          <section
            data-theme="emerald"
            className="flexCenter flex-col w-full mt-10"
          >
            <h1 className="text-xl font-bold">{pokemon.name}</h1>
            <div className="mt-1">
              <p>ID: {pokemon.id}</p>
              <p>Species: {pokemon.species.name}</p>
            </div>

            <div className="mt-1 flexCenter w-full">
              <p>Types: </p>
              {pokemon_types &&
                pokemon_types.map((item) => <p>{item.type.name}</p>)}
            </div>

            <div className="mt-1">
              <p>Weight: {pokemon.weight}</p>
              <p>Height: {pokemon.height}</p>
            </div>

            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              width={200}
              height={200}
              className="object-cover rounded-2xl"
              alt="pokemon image"
            />
          </section>
        )}
      </div>
    </>
  );
};

export default PokemonPage;
