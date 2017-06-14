"use strict";

const Header = () => {
	const header = $("<header class='container'></header>");
	const title = $("<div class='row'><div class='col s12>Pokédex</div></div>")
	const search = $("<div class='row'><div class='col s12><div class='row'><div class='input-field col s7'><i class='material-icons prefix'></i><input id='icon_prefix' type='text'><label for='icon_prefix'>Pokémon</label></div><div class='col s5 az'>A-Z</div></div></div></div>")
	

	header.append(title);
	header.append(search);
	return header;
}