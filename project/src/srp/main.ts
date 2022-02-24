import { ShoppingCart } from "./entities/shopping-cart";
import { Order } from "./entities/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 39.90));
shoppingCart.addItem(new Product('caderno', 19.40));
shoppingCart.addItem(new Product('Caneta', 3.00));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.checkout());
order.checkout();
console.log(order.orderStatus);
