"use strict";



const PokemonItem = (station, update) => {
  console.log(station);
 
	// const pokemonContainer = $("<div class='container'></div>");
  // const pokemonRow = $("<div class='row'></div>");      
	const pokemonS2 = $("<div class='divPokemon col s2 center-align'></div>");
	const pokemon = $("<img src='http://serebii.net/art/th/"+ station.entry_number + ".png' alt='pokemon'>");
	const pokemonName = $("<div class='trapecio'><img src='assets/icon/pokeball_gray.png' alt='pokeball'><img src='assets/icon/valentines-heart.png' alt='heart'><img src='assets/icon/data.png' alt='cross'><p id='pokemonName'>" + station.pokemon_species.name + "</p></div>");
  console.log(pokemon);
	pokemonS2.append(pokemon);
	pokemonS2.append(pokemonName);
  // pokemonRow.append(pokemonS2);
  // pokemonContainer.append(pokemonRow);

  return pokemonS2;
}

const reRender = (container,filterPokemons,update) => { 
  container.empty();
  const filteredPokemons = filterByPokemon(state.pokemons, filterPokemons);
  if(filteredPokemons.length > 0){
    console.log(filteredPokemons);
    $.each(filteredPokemons, (index,station) =>{
      container.append(PokemonItem(station, update));
    });
  } else {
    container.append($('<p>Pokemon no encontrado</p>'));
  }
}  

const Search = (update) =>{
  const pokemonContainer = $("<div class='container'></div>");
  const pokemonRow = $("<div class='row'></div>");  
	const parent = $("<div class='row'></div>");
	const az = $("<div class='az col s1 offset-s3 center-align'>A-Z</div>");
	const search = $("<div class='input-field col s7'></div>")
	const icon = $("<i class='material-icons prefix'>search</i>")
	const input = $("<input id='search' class='search' type='text'><label for='search'>Pokémon</label>");
	const pokemons = $('<div class="pokemons"></div>');

  pokemonContainer.append(parent);
  pokemonContainer.append(pokemonRow);
  parent.append(search);
  parent.append(az);
  pokemonRow.append(pokemons);
  search.append(icon);
  search.append(input);

	input.on('keyup', (e) => {
	    const filterPokemons = input.val();
	    reRender(pokemons,filterPokemons,update);
  	});

  reRender(pokemons,"",update);
  console.log(pokemons);

  return pokemonContainer;
}
