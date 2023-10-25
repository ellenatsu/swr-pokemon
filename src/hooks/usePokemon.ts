import useSWR from "swr";
import api from "@/network/axiosInstance";
import { Pokemon, PokemonPage, EvolutionChain } from "@/models/Pokemon";
import axios from "axios";

import { AxiosError } from "axios";

export default function usePokemon(name: string) {
  //const url = "/pokemon/" + name;

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, isLoading, mutate } = useSWR(
    "/pokemon/eevee",
    fetcher
  );

  return {
    pokemon: data,
    pokemonLoading: isLoading,
    mutatePokemon: mutate,
  };
}
