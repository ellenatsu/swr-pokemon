"use client";

import Link from "next/link";
import useSWR from "swr";
import * as PokemonApi from "@/network/pokemon-api";
import { AxiosError } from "axios";
import PokemonEntry from "@/components/PokemonEntry";
import SearchBar from "@/components/SearchBar";

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
      <SearchBar />
      <section className="grid grid-cols-6 gap-4 mb-10">
        {isLoading && <div>loading...</div>}
        <div className="col-start-2 col-span-4 grid grid-cols-4 gap-4"> 
          {data?.results.map((item) => (
            <div>
              <Link href={`/pokemon/${item.name}`} className="p-4">
                <PokemonEntry pokeName={item.name} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
