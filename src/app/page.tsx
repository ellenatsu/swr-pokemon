"use client";

import Link from "next/link";
import useSWR from "swr";
import * as PokemonApi from "@/network/pokemon-api";
import { AxiosError } from "axios";
import PokemonEntry from "@/components/PokemonEntry";

export default function Home() {
  const test_name = "eevee";
  const page = 1;
  //fetch all the pokemon with names
  const { data, isLoading } = useSWR(["getPokemonPage", page], () =>
    PokemonApi.getPokemonPage(page)
  );

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>Pokedex demo</h1>
      <section className="grid grid-cols-4 gap-4">
        {isLoading && <div>loading...</div>}
        {data?.results.map((item) => (
          <div>
            <Link href={`/pokemon/${item.name}`} className="bg-gray-200 p-4">
              <PokemonEntry pokeName={item.name} />
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
