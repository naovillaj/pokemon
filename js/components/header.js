"use strict";

const Header = () => {
	const header = $("<header class='container'></header>");
	const title = $("<div class='row'><div class='col s12 title center-align'>Pokédex</div></div>")
	

	header.append(title);
	
	return header;
}