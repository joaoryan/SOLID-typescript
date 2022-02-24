type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho foi limpo');
    this._items.length = 0;
  }

}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camiseta', price: 39.4 });
shoppingCart.addItem({ name: 'Chinelo', price: 29.4 });
shoppingCart.addItem({ name: 'caderno', price: 10.4 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.checkout());
console.log(shoppingCart.orderStatus);
