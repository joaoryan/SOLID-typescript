import { CartItem } from "./protocols/cart-item";
import { CustomerOrder } from "./protocols/customer-protocol";
import { MessagingProtocol } from "./protocols/messaging-protocol";
import { OrderStatus } from "./protocols/order-status";
import { PersistencyProtocol } from "./protocols/persistency-protocol";
import { ShoppingCartProtocol } from "./protocols/shopping-cart-protocol";

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) { }

  addItem(item: CartItem): void {
    throw new Error("Method not implemented.");
  }
  removeItem(index: number): void {
    throw new Error("Method not implemented.");
  }
  total(): number {
    throw new Error("Method not implemented.");
  }
  totalWithDiscount(): number {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }

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
