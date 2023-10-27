"use client";

import usePokemon from "@/hook/usePokemon";
import Image from "next/image";
import DetailInfo from "./DetailInfo";

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
          <>
            <div className="bg-white flex flex-row justify-center w-full">
              <div className="bg-white w-[1440px] h-[1008px]">
                <div className="relative h-[971px] top-[30px] bg-[#f8f6d4]">
                  <div className="absolute w-[1290px] h-[695px] top-[143px] left-[70px] bg-[#f4dadc]">
                    <div className="absolute w-[647px] h-[427px] top-0 left-[15px]">
                      <div className="relative w-[645px] h-[427px] bg-[#b1a5cb]">
                        <div className="absolute w-[576px] h-[56px] top-[17px] left-[29px] [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:2px_#00000047] [font-family:'Inknut_Antiqua-Bold',Helvetica] font-bold text-[#faedfb] text-[30px] text-center tracking-[0] leading-[normal]">
                          {pokemon.name}
                        </div>
                        <div className="absolute w-[614px] h-[313px] top-[98px] left-[16px] bg-[#fffdfd]">
                          <Image
                            src={
                              pokemon.sprites.other["official-artwork"]
                                .front_default
                            }
                            width={200}
                            height={200}
                            className="object-center rounded-2xl"
                            alt="pokemon image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[1259px] h-[657px] top-[18px] left-[15px]">
                      <div className="absolute top-0 left-[661px] w-[596px] h-[432px]">
                        <DetailInfo pokemonInfo={pokemon} />
                      </div>
                      <div className="w-[1259px] h-[236px] top-[421px] absolute left-0">
                        <div className="relative w-[1257px] h-[242px] top-[-6px]">
                          <div className="absolute w-[1257px] h-[199px] top-[43px] left-0 bg-[#f9f2f2]" />
                          <div className="absolute w-[397px] h-[46px] top-[6px] left-[17px] bg-[#f5c1c3]" />
                          <div className="absolute w-[397px] h-[46px] top-0 left-[11px] [-webkit-text-stroke:6px_#7a7f9b] [font-family:'Indie_Flower-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                            TRAINER MEMO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[1440px] h-[108px] top-0 left-0 bg-[#def0f6]">
                    <div className="absolute w-[786px] h-[78px] top-[30px] left-[615px]">
                      <div className="absolute w-[498px] h-[76px] top-[2px] left-[229px] bg-[#056397]" />
                      <div className="absolute h-[77px] top-0 left-[305px] [font-family:'Inknut_Antiqua-Bold',Helvetica] font-bold text-white text-[30px] text-center tracking-[0] leading-[normal]">
                        PAGE
                      </div>
                      <div className="absolute h-[77px] top-px left-[524px] [font-family:'Inknut_Antiqua-Bold',Helvetica] font-bold text-white text-[30px] text-center tracking-[0] leading-[normal]">
                        MENU
                      </div>
                      <div className="absolute w-[235px] h-[76px] top-[2px] left-0 bg-[#bdd7f0]" />
                      <img
                        className="top-[3px] left-[707px] absolute w-[79px] h-[72px] object-cover"
                        alt="Filled"
                        src="/arrow-next.png"
                      />
                    </div>
                    <div className="absolute w-[593px] h-[77px] top-[31px] left-[22px]">
                      <div className="absolute w-[530px] h-[76px] top-px left-[63px] bg-[#eab2b2]" />
                      <div className="absolute h-[77px] top-0 left-[130px] [font-family:'Inknut_Antiqua-Bold',Helvetica] font-bold text-black text-[30px] text-center tracking-[0] leading-[normal]">
                        POKEMON INFO
                      </div>
                      <img
                        className="top-[2px] left-0 absolute w-[79px] h-[72px] object-cover"
                        alt="Filled"
                        src="/arrow-previous.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PokemonPage;
