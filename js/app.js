'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  // wrapper.append(Cartelera(data));
  root.append(wrapper);
}


const root = $("#root");
render(root);
  