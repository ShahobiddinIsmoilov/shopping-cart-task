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

console.log(addItem("Razer Barracuda Pro Black Headphones", 3060000));
console.log(addItem("Logitech Brio 4K Webcam", 1699000));

const totalCost = calculateTotalCost(shoppingCart);
console.log(`Total cost: $${totalCost}`);
