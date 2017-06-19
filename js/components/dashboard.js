"use strict";



const PokemonItem = (station, update) => {
  console.log(station);

	const pokemonS2 = $("<div class='divPokemon col s2 center-align'></div>");
	const pokemon = $("<img class='waves-effect waves-light' src='http://serebii.net/art/th/"+ station.entry_number + ".png' alt='pokemon'>");
	const pokemonName = $("<div class='trapecio'><img src='assets/icon/pokeball_gray.png' alt='pokeball'><img src='assets/icon/valentines-heart.png' alt='heart'><img src='assets/icon/data.png' alt='cross'><p id='pokemonName'>" + station.pokemon_species.name + "</p></div>");
  console.log(pokemon);
	pokemonS2.append(pokemon);
	pokemonS2.append(pokemonName);

	pokemon.on('click',(e) => {
	e.preventDefault();
	state.selectedPokemon = station;

	const divModal = $("<div class='modal'></div>");
	const modalContent = $("<div class='modal-content'></div>");
	const h1Name = $("<h1>"+station.pokemon_species.name+"</h1>");
	const imgModal = $("<div class='imgModal'><img class='imgModal' src='http://serebii.net/art/th/"+ station.entry_number + ".png' alt='pokemon'></div>");
	const divContent = $("<div class='divContent'><div class='content'>"+station.pokemon_species.url.flavor_text_entries[1].flavor_text+"</div><div>Lorem</div><div><h3>Tipo</h3><span>Tipo</span></div><div><h3>Debilidad</h3><span>Debilidad</span></div></div>");
	const cerrar = $("<div class='modal-action modal-close waves-effect waves-green'><img src='assets/icon/cross-out.png' alt='x'></div>");

	console.log(station.pokemon_species.url);

	divModal.append(cerrar);
	divModal.append(h1Name);
	divModal.append(modalContent);
	modalContent.append(imgModal);
	modalContent.append(divContent);


	// <!-- Modal Trigger -->
	// <a class="waves-effect waves-light btn" href="#modal1">Modal</a>
	//
	// <!-- Modal Structure -->
	// <div id="modal1" class="modal">
	//   <div class="modal-content">
	//     <h4>Modal Header</h4>
	//     <p>A bunch of text</p>
	//   </div>
	//   <div class="modal-footer">
	//     <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
	//   </div>
	// </div>



	update();
	});

  return divModal;
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
