"use client";

import Link from "next/link";
import useSWR from "swr";
import * as PokemonApi from "@/network/pokemon-api";
import { AxiosError } from "axios";

export default function Home() {
  const test_name = "eevee";
  const page = 1;
  //fetch all the pokemon with names
  const { data, isLoading } = useSWR(["getPokemonPage", page], () =>
    PokemonApi.getPokemonPage(page)
  );

  if (isLoading) return <div>loading...</div>;

  return (
    <section className="flexCenter flex-col">
      {isLoading && <div>loading...</div>}
      {data?.results.map((item) => (
        <div className="mt-3 text-3xl gap-3 bg-slate-300 p-5">
          <Link href={`/pokemon/${item.name}`}>visit {item.name}</Link>
        </div>
      ))}
    </section>
  );
}
