import Module from '/node_modules/js-little-core/module.js';

export default class ErrorCreation extends Module {
  execute() {
    fetch('https://dummyjson.com/productss')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error 404');
        }
        response.json();
      })
      .then(({ products }) =>
        fetch('https://dummyjson.com/products/' + products[0].id),
      )
      .then((response) => response.json())
      .then(console.log)
      .catch((error) => console.error(error.message));
  }
}
