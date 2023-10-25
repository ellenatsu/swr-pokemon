"use client";

import useSWR from "swr";
import { AxiosError } from "axios";
import * as PokemonApi from "@/network/pokemon-api";
import Image from "next/image";

const PokemonDetailsPage = ({
  params: { name },
}: {
  params: { name: string };
}) => {
  //host/pokemon/[name]
  const {
    data: pokemon,
    isLoading,
    error,
  } = useSWR(name, PokemonApi.getPokemon);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const pokemon_types: { type: { name: string } }[] | undefined =
    pokemon?.types;

  return (
    <>
      {pokemon === null && <p>Pokemon not found</p>}
      {pokemon && (
        <section
          data-theme="pastel"
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
    </>
  );
};

export default PokemonDetailsPage;
