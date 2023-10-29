"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import useSWR from "swr";
import * as PokemonApi from "@/network/pokemon-api";
import PokemonEntry from "@/components/PokemonEntry";
import SearchBar from "@/components/SearchBar";
import React, { useState, useEffect } from 'react';
import Spinner from "@/components/Spinner";

export default function Home() {
  //get page number from url
  const searchParams = useSearchParams()
  const pathname = usePathname();

  const page = parseInt(searchParams.get('page') || "1");

  //fetch all the pokemon with names
  const { data, isLoading } = useSWR(["getPokemonPage", page], () =>
    PokemonApi.getPokemonPage(page)
  );

  const [testLoading, setTestLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTestLoading(false);
  //   }, 5000); // 5 seconds delay
  // }, []);


  //if (isLoading || testLoading) return <Spinner />;

  return (
    <>
      <SearchBar />
      {isLoading && (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        )}
      <section className="grid grid-cols-6 gap-4 mb-10"> 
        <div className="col-start-2 col-span-4 grid grid-cols-4 gap-4"> 
        {data?.results.map((item) => {
          const url = item.url; 
          const idMatch = url.match(/pokemon\/(\d+)\//);
          const pokeId = idMatch ? idMatch[1] : 'unknown'; 
          return (
            <div key={pokeId}>
              <Link href={`/pokemon/${pokeId}`} className="p-4">
                <PokemonEntry pokeName={item.name} />
              </Link>
            </div>
          );})}
        </div>
      </section>
      <div className="flexCenter gap-40 m-10">
            {data?.previous && (
              <Link className="text-2xl w-[120] p-3 rounded-md border border-slate-400 hover:bg-red-200 shadow-md" href={pathname + '?page=' + (page-1)}>
                Previous Page
              </Link>
            )}
            {data?.next && (
              <Link className="text-2xl w-[120] p-3 rounded-md border border-slate-400 hover:bg-red-200 shadow-md" href={pathname + '?page=' + (page+1)}>Next Page</Link>
            )}
      </div>
      
    </>
  );
}
