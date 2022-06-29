const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // Second way
  let totalPrice = 0;

  for (const item of allProdcuts) {
    const { name, price, quantity } = item;
    if (name === productName) {
      totalPrice += price * quantity;
    }
  }

  return totalPrice;
};

// First way
//     let totalPrice = 0;
//   for (const item of allProdcuts) {
//     if (item['name'] === productName) {
//       totalPrice += item['price'] * item['quantity'];
//     }
//   }
//   return totalPrice;
// };

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
