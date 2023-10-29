import React from "react";
import { Pokemon, PokemonPage, EvolutionChain } from "@/models/Pokemon";
import TypeLabel from "./TypeLabel";

type Props = {
  pokemonInfo: Pokemon;
};

const InputRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-row gap-5 border-2 border-red-200 rounded-lg">
      <div className="bg-red-200 p-1 rounded-sm w-[70px] pl-2">{label}</div>
      <div className="p-1 text-center">{value}</div>
    </div>
  );
}

const DetailInfo = ({ pokemonInfo }: Props) => {
  const pokemon_types: { type: { name: string } }[] | undefined =
    pokemonInfo?.types;

  var type_list = "";
  pokemon_types.map((item) => {type_list = type_list + item.type.name + " ";});

  return (
    <div className="flex justify-start flex-col gap-4 mt-5">
      <InputRow label="ID" value={pokemonInfo.id.toString()} />
      <InputRow label="Name" value={pokemonInfo.name} />
      <InputRow label="Height" value={pokemonInfo.height.toString() + " cm"} />
      <InputRow label="Weight" value={(pokemonInfo.weight/10).toString() + " kg"} />
      <InputRow label="Type" value={type_list} />
      
      <div>
        <div className="bg-red-200 p-1 rounded-lg w-[120px]">
          Trainer Memo
        </div>
        <div className="border-2 border-red-200 rounded-lg h-[80px]">Input textarea holder</div>
      </div>  
    </div>    
  );
};

export default DetailInfo;
