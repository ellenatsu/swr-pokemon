import usePokemon from "@/hook/usePokemon";
import Image from "next/image";
import DetailInfo from "./DetailInfo";

type Props = {
  pokeName: string;
};
const PokemonEntry = ({ pokeName }: Props) => {
  //host/pokemon/[name]
  const { pokemon, pokemonLoading, mutatePokemon } = usePokemon(pokeName);

  if (pokemonLoading) return <div>loading...</div>;

  return (
    <>
      {pokemon && (
        <section className="flexCenter flex-col w-full mt-10 p-5 rounded-lg shadow-lg bg-yellow-200 border border-yellow-300">
          <h1 className="text-4xl font-bold mb-5">{pokemon.name}</h1>

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

export default PokemonEntry;
