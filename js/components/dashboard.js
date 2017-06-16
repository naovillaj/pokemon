"use strict";

const PokemonItem = (x) => {
	console.log(x);
  const pokemonContainer = $("<div class='container'></div>");
  const pokemonRow = $("<div class='row'></div>");


  state.pokemons.pokemon_entries.forEach((station) =>{
  	const pokemonS2 = $("<div class='col s2 center-align'></div>");
  	const pokemon = $("<img src='http://serebii.net/art/th/"+ x + ".png' alt='pokemon'>");
  	const pokemonName = $("<div id='trapecio'><img src='assets/icon/pokeball_gray.png alt='pokeball'><img src='assets/icon/valentines-heart.png alt='heart'><img src='assets/icon/cross-out.png alt='cross'><span id='pokemonName'>" + state.pokemons.pokemon_entries[x].pokemon_species.name + "</span></div>");

  	pokemonS2.append(pokemon);
  	pokemonS2.append(pokemonName);


  });

  pokemonRow.append(pokemonS2);
  pokemonContainer.append(pokemonRow);

// 	maplink.on('click',(e) => {
// 	e.preventDefault();
// 	state.selectedStation = props.station;
// 	props.update();
// });

  return pokemonContainer;
}

// console.log(state.pokemons.pokemon_entries[0].entry_number);
// console.log(state.pokemons.pokemon_entries[0].pokemon_species.name);

const reRender = (container,filteredPokemons,update) => {
  container.empty();
  filteredPokemons.forEach((pokemon) => {
    const pokemonItem = PokemonItem({
      pokemon: pokemon,
      update:  update
    });
    container.append(pokemonItem);
  });
}



const Search = (update) =>{
	const parent = $("<div class='row'></div>");
	const az = $("<div class='az col s1 offset-s3 center-align'>A-Z</div>");
	const search = $("<div class='input-field col s7'></div>")
	const icon = $("<i class='material-icons prefix'>search</i>")
	const input = $("<input id='search' class='search' type='text'><label for='search'>Pokémon</label>");
	const pokemons = $('<div class="pokemons"></div>');


	input.on('keyup', (e) => {
	    const filteredPokemons = filterByPokemon(state.pokemons,$(e.target).val());
	    reRender(pokemons,filteredPokemons,update);
  	});

	parent.append(search);
	parent.append(az);
  parent.append(pokemons);
	search.append(icon);
  search.append(input);
}
