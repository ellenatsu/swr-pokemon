import type { Metadata } from "next";
import PokemonPage from "@/components/PokemonDetail";
import Link from "next/link";

type Params = {
  params: {
    name: string;
  };
};

export async function generateMetadata({
  params: { name },
}: Params): Promise<Metadata> {
  return {
    title: name + " - Poekdex",
    description: name + " Poekdex",
  };
}

const PokemonDetailsPage = ({ params: { name } }: Params) => {
  return (
    <div>
      <Link className="fix l-0" href="/">GO BACK</Link>
      <PokemonPage pokeName={name} />
    </div>
  );
};
export default PokemonDetailsPage;
