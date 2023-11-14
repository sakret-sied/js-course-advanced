import Module from '/node_modules/js-little-core/module.js';

export default class QueryFunction extends Module {
  async execute() {
    const data = await this.getData(
      'https://dummyjson.com/products',
      'No products',
    ).then(({ products }) => {
      console.log(products);
      return this.getData(
        'https://dummyjson.com/products/' + products[0].id,
        'Product where you are',
      );
    });
    console.log(data);
  }

  async getData(url, error = 'Error') {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(error);
      }
      return response.json();
    });
  }
}
