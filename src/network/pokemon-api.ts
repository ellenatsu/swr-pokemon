import { Pokemon, PokemonPage, EvolutionChain } from "@/models/Pokemon";
import api from "./axiosInstance";
import axios from "axios";

export async function getPokemon(name: string) {
  const response = await api.get<Pokemon>(`/pokemon/${name}`);
  return response.data;
}

export async function getPokemonById(id: string) {
  const response = await api.get<Pokemon>(`/pokemon/${id}`);
  return response.data;
}

export async function getPokemonPage(page: number) {
  const pageSize = 12;
  const response = await api.get<PokemonPage>(
    `/pokemon?limit=${pageSize}&offset=${(page - 1) * pageSize}`
  );
  return response.data;
}

export async function getPokemonEvolutions(speices: string) {
  const species_response = await api.get(`/pokemon-species/${speices}`);
  //get the evolution chain id
  const evo_url = species_response.data.evolution_chain.url;

  const evo_response = await axios.get<EvolutionChain>(evo_url);

  return evo_response.data;
}
