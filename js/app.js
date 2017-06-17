'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Search());
  root.append(wrapper);
}

const state = {
  pokemons: null,
  selectedPokemon: null
};


$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemons = json;
    console.log(state.pokemons);
    console.log(state.pokemons.pokemon_entries[0].entry_number);
	  console.log(state.pokemons.pokemon_entries[0].pokemon_species.name);
    const root = $('#root');
    render(root);
  });

});
