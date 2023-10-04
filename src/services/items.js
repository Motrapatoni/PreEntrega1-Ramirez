import products from '../assets/products.json';

export const getItemByName = (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find((product) => product.name === name);
        if (product) {
          resolve(product);
        } else {
          reject(new Error('Producto no encontrado'));
        }
      }, 1000);
    });
  };

export const getItemsList = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 1000);
	}).then((data) => ({ results: data }));
};
