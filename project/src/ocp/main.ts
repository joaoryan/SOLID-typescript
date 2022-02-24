import { ShoppingCart } from "./classes/shopping-cart";
import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./classes/protocols/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 39.90));
shoppingCart.addItem(new Product('caderno', 19.40));
shoppingCart.addItem(new Product('Caneta', 3.00));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.checkout());
order.checkout();
console.log(order.orderStatus);
