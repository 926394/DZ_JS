// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];

// РЕШЕНИЕ
let percent = 15;
products.forEach((key) => {
  priceSale = key.price - (percent / 100 * key.price);
  console.log(`${key.price} => ${priceSale}`);
});

console.log(products);


