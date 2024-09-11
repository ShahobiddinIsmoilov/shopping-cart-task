interface Item {
  name: string;
  price: number;
}

const shoppingCart: Item[] = [];

function addItem(name: string, price: number): string {
  const item: Item = { name, price };
  shoppingCart.push(item);
  return `${name} has been added to the cart`;
}

function calculateTotalCost(items: Item[]): number {
  return items.reduce((total, item) => total + item.price, 0);
}

console.log(addItem("Apple", 1.5));
console.log(addItem("Banana", 1));

const totalCost = calculateTotalCost(shoppingCart);
console.log(`Total cost: $${totalCost}`);
