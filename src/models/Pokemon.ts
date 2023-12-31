//pokemon?limit=20&offset=0
export interface PokemonPage {
  results: { url: string, name: string }[];
  next: string | null; //next request url
  previous: string | null;
}

export interface Pokemon {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  species: {
    name: string;
  };
}

export interface EvolutionChain {
  chain: {
    evolves_to: {
      evolves_to: {
        species: {
          name: string;
        };
      }[]; //might have various evolution
      species: {
        name: string;
      };
    }[];
    species: {
      name: string;
    };
  };
}

export type PokemonTypeColors = {
  [type: string]: string;
};
