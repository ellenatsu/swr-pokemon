"use client";

import useSWR from "swr";
import * as PokemonApi from "@/network/pokemon-api";
import { AxiosError } from "axios";

export default function usePokemon(id: string) {
  const { data, isLoading, mutate } = useSWR(id, async () => {
    try {
      return await PokemonApi.getPokemonById(id);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null;
      } else {
        throw error;
      }
    }
  });

  return {
    pokemon: data,
    pokemonLoading: isLoading,
    mutatePokemon: mutate,
  };
}
