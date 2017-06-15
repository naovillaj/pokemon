'use strict';

const filterByPokemon = (stations,query) => {
  return stations.pokemon_entries.filter((station) => {
    return station.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });
}



// return pokemons.pokemon_entries.filter((pokemon)=>{
//     return pokemon.pokemon_species.name.toLowerCase().indexOf(name.toLowerCase())!= -1;