import React from "react";
import { Pokemon, PokemonPage, EvolutionChain } from "@/models/Pokemon";

type Props = {
  pokemonInfo: Pokemon;
};

const DetailInfo = ({ pokemonInfo }: Props) => {
  const pokemon_types: { type: { name: string } }[] | undefined =
    pokemonInfo?.types;

  return (
    <>
      <div className="w-[598px] top-[301px] absolute h-[57px] left-0">
        <div className="relative h-[59px] top-[-2px] left-[-2px]">
          <div className="absolute w-[243px] h-[46px] top-[8px] left-[8px] bg-[#f5c1c3]" />
          <div className="absolute w-[243px] h-[46px] top-0 left-0 [-webkit-text-stroke:5px_#7a7f9b] [font-family:'Inknut_Antiqua-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            HEIGHT
          </div>
        </div>
      </div>
      <div className="w-[598px] top-[375px] absolute h-[57px] left-0">
        <div className="relative h-[59px] top-[-2px] left-[-2px]">
          <div className="absolute w-[243px] h-[46px] top-[8px] left-[8px] bg-[#f5c1c3]" />
          <div className="absolute w-[243px] h-[46px] top-0 left-0 [-webkit-text-stroke:5px_#7a7f9b] [font-family:'Inknut_Antiqua-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            ITEM
          </div>
        </div>
      </div>
      <div className="w-[600px] top-[224px] absolute h-[57px] left-0">
        <div className="relative w-[598px] h-[59px] top-[-2px] left-[-2px]">
          <img
            className="absolute w-[596px] h-[57px] top-[2px] left-[2px]"
            alt="Rectangle"
            src="rectangle-7-3.svg"
          />
          <div className="absolute w-[243px] h-[46px] top-[8px] left-[8px] bg-[#f5c1c3]" />
          <div className="absolute w-[243px] h-[46px] top-0 left-0 [-webkit-text-stroke:5px_#7a7f9b] [font-family:'Inknut_Antiqua-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            SPECIES
          </div>
          <div className="top-[6px] left-[263px] absolute w-[243px] h-[46px] [-webkit-text-stroke:2px_#080808] [font-family:'Inconsolata-Regular',Helvetica] font-normal text-[#6677d8] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            {pokemonInfo.species.name}
          </div>
        </div>
      </div>
      <div className="w-[600px] top-[149px] absolute h-[57px] left-0">
        <div className="relative w-[598px] h-[59px] top-[-2px] left-[-2px]">
          <div className="absolute w-[243px] h-[46px] top-[8px] left-[8px] bg-[#f5c1c3]" />
          <div className="absolute w-[243px] h-[46px] top-0 left-0 [-webkit-text-stroke:5px_#7a7f9b] [font-family:'Inknut_Antiqua-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            TYPE
          </div>
          <div className="top-[11px] left-[264px] absolute w-[243px] h-[46px] [-webkit-text-stroke:2px_#080808] [font-family:'Inconsolata-Regular',Helvetica] font-normal text-[#6677d8] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            {pokemon_types &&
              pokemon_types.map((item) => <p>{item.type.name}</p>)}
          </div>
        </div>
      </div>
      <div className="w-[600px] top-[75px] absolute h-[57px] left-0">
        <div className="relative w-[598px] h-[59px] top-[-2px] left-[-2px]">
          <div className="absolute w-[243px] h-[46px] top-[8px] left-[8px] bg-[#f5c1c3]" />
          <div className="absolute w-[243px] h-[46px] top-0 left-0 [-webkit-text-stroke:5px_#7a7f9b] [font-family:'Inknut_Antiqua-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            NAME
          </div>
          <div className="top-[11px] left-[264px] absolute w-[243px] h-[46px] [-webkit-text-stroke:2px_#080808] [font-family:'Inconsolata-Regular',Helvetica] font-normal text-[#6677d8] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            {pokemonInfo.name}
          </div>
        </div>
      </div>
      <div className="w-[600px] top-0 absolute h-[57px] left-0">
        <div className="relative w-[598px] h-[59px] top-[-2px] left-[-2px]">
          <div className="absolute w-[243px] h-[46px] top-[8px] left-[8px] bg-[#f5c1c3]" />
          <div className="top-[6px] left-[264px] absolute w-[243px] h-[46px] [-webkit-text-stroke:2px_#080808] [font-family:'Inconsolata-Regular',Helvetica] font-normal text-[#6677d8] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            {pokemonInfo.id}
          </div>
          <div className="absolute w-[243px] h-[46px] top-0 left-0 [-webkit-text-stroke:5px_#7a7f9b] [font-family:'Inknut_Antiqua-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            No
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailInfo;
