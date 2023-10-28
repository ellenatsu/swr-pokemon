import usePokemon from "@/hook/usePokemon";
import Image from "next/image";
import DetailInfo from "./DetailInfo";
import Loading from "./Loading";
import TypeLabel from "./TypeLabel";

type Props = {
  pokeName: string;
};

const PokemonEntry = ({ pokeName }: Props) => {
  //host/pokemon/[name]
  const { pokemon, pokemonLoading, mutatePokemon } = usePokemon(pokeName);

  
  const pokemon_types: { type: { name: string } }[] | undefined =
  pokemon?.types;

  if (pokemonLoading) return <div><Loading /></div>;

  return (
    <>
      {pokemon && (
        <>
        <div className="flexCenter flex-col w-full mt-5 p-5 rounded-lg shadow-lg bg-slate-200 border border-slate-300">
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            width={200}
            height={200}
            className="object-cover rounded-2xl"
            alt="pokemon image"
          />
        </div>
        <div className="flex justify-start flex-col">
          <p className="text-gray text-xl">{`#${pokemon.id.toString().padStart(4, '0')}`}</p>
          <div className="text-3xl font-bold mt-5">{pokemon.name}</div>
          <div className="flexStart flex-row gap-3 mt-2">
          {pokemon_types &&
              pokemon_types.map((item) => <TypeLabel type={item.type.name} />)}
          </div>
        </div>
        
        </>
      )}
    </>
  );
};

export default PokemonEntry;
