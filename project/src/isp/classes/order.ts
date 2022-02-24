import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { CustomerOrder } from "./protocols/customer-protocol";
import { OrderStatus } from "./protocols/order-status";
import { ShoppingCart } from "./shopping-cart";

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) { }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho está vazio');
      return;
    }

    this.messaging.sendMessage(`Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`);
    this.persistency.saveOrder();
    this.cart.clear();
    console.log('O cliente e:', this.customer.getName(), this.customer.getIDN())
  }

}
