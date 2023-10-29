import type { Metadata } from "next";
import PokemonDetail from "@/components/PokemonDetail";
import EvolutionChain from "@/components/EvolutionChain";

export async function generateMetadata({params: {pokeParams}} : {params: {pokeParams: string}}): Promise<Metadata> {

  return {
    title: pokeParams + " - Poekdex",
    description: pokeParams + " Poekdex",
  };
}

const PokemonDetailsPage = ({params: {pokeParams}} : {params: {pokeParams: string}}) => {

  return (
    <>
      <section>
        <PokemonDetail pokeParams={pokeParams} />
      </section>
      <section className="flexCenter mt-10 mb-5">
        <EvolutionChain />
      </section>
    </>
  );
};
export default PokemonDetailsPage;
