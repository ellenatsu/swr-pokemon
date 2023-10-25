import useSWR from "swr";
import {
  getPokemon,
  getPokemonPage,
  getPokemonEvolutions,
} from "@/network/pokemon-api";
import usePokemon from "@/hooks/usePokemon";

const PokemonDetailsPage = ({
  params: { name },
}: {
  params: { name: string };
}) => {
  //host/pokemon/[name]

  const { pokemon, pokemonLoading, mutatePokemon } = usePokemon(name);

  return (
    <>
      {pokemon === null && <p>Pokemon not found</p>}
      {pokemon && (
        <>
          <h1 className="text-center text-capitalize">{pokemon.name}</h1>
        </>
      )}
    </>
  );
};

export default PokemonDetailsPage;
