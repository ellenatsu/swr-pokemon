"use client";

import usePokemon from "@/hook/usePokemon";
import Image from "next/image";
import DetailInfo from "./DetailInfo";
import Spinner from "./Spinner";
import Link from "next/link";

type Props = {
  pokeParams: string;
};
const PokemonDetail = ({ pokeParams }: Props) => {

  const { pokemon, pokemonLoading, mutatePokemon } = usePokemon(pokeParams);

  const pokemon_types: { type: { name: string } }[] | undefined =
    pokemon?.types;

  return (
    <>
      <div className="flexCenter flex-col gap-2 mb-2 w-[80%] items-center">
        {pokemon === null && <p>Pokemon not found</p>}
        {pokemonLoading && <Spinner />}
        {pokemon && (
          <>
            <div className="flexCenter gap-10 m-10"> 
              { (pokemon.id > 1) && (
                <Link href={`/pokemon/${pokemon.id-1}`} className="flexStart flex text-xl bg-blue-200 hover:bg-blue-500 p-3 border rounded-lg">
                  <Image src="/arrow-previous.png" width={30} height={20} alt="" className="object-cover"/>
                  {`No.${(pokemon.id-1).toString().padStart(4, '0')}`}
                </Link>)}
              <div className="font-bold text-black text-4xl text-center">{pokemon.name}</div>
              { (pokemon.id < 1017 ) && (
                <Link href={`/pokemon/${pokemon.id+1}`} className="flexStart flex text-xl bg-blue-200 hover:bg-blue-500 p-3 border rounded-lg">
                  {`No.${(pokemon.id+1).toString().padStart(4, '0')}`}
                  <Image src="/arrow-next.png" width={30} height={20} alt="" className="object-cover"/>
                </Link>)}  
            </div>
            <div className="flexCenter flex gap-2 border-4 rounded-lg border-yellow-400 p-2 shadow-sm shadow-yellow-700">       
              <div className="w-[645px] h-[427px] bg-[#b1a5cb] rounded-lg flexCenter flex-col">
                <div className="[text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:2px_#00000047] font-bold text-[#faedfb] text-4xl mb-5">
                  NickName placeholder
                </div>
                <div className="bg-[#fffdfd] flexCenter w-[95%] pb-10">
                  <Image
                    src={
                      pokemon.sprites.other["official-artwork"]
                        .front_default
                      }
                      width={300}
                      height={300}
                      className="object-center rounded-2xl p-5"
                      alt="pokemon image"
                  />
                </div>
              </div>
                  
              <div className="w-[250px] h-[427px]">
                <DetailInfo pokemonInfo={pokemon} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PokemonDetail;
