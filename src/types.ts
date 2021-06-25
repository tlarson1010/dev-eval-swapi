import internal from "stream";

// TODO: define interface
export interface PersonType {
  name: string;
  mass: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  skin_color: string;
  url: string;
  species: Array<string>;
  films: Array<string>;
  starships: Array<string>;
  id: number;
}

export interface SpeciesType {
  average_height: string;
  average_lifespan: string;
  classification: string;
  designation: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  skin_colors: string;
  url: string;
  films: Array<string>;
  people: Array<string>;
  id: number;
}

export interface PlanetType {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
  films: Array<string>;
  residents: Array<string>;
  id: number;
}

export interface FilmType {
  title: string;
  episode_id: string;
  opening_crawl: string;
  planets: Array<string>;
  producer: string;
  release_date: string;
  url: string;
  id: number;
}

export interface VehicleType {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: Array<string>;
  films: Array<string>;
  url: string;
  vehicle_class: string;
  id: number;
}

export interface StarshipType {
  mglt: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: Array<string>;
  pilots:Array<string>;
  starship_class: string;
  url: string;
  id: number;
}

export interface FormValues {
  query: string
  searchType: string
}
