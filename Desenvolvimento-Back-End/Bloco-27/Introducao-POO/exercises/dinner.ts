class Customer {
  name: string;
}

class Order {
  customer: number;
  orderItems: string[];
  payment: string;
  discount?: number;

  //   constructor(
  //     customer: number,
  //     orderItems: string[],
  //     payment: string,
  //     discount?: number
  //   )
  constructor(private order: OrderItem[] = []) {}
  //   {
  //     this.customer = customer;
  //     this.orderItems = orderItems;
  //     this.payment = payment;
  //     this.discount = discount;
  //   }

  totalOrderPrice(prices: OrderItem[]) {
    const itemPrice = prices.map((item) => item.price);
    const totalPrice = itemPrice.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return totalPrice;
  }

  totalOrderPriceWithDicount(prices: OrderItem[]) {
    const getPrices = prices.map((item) => item.price);
    const totalPrice = getPrices.reduce((acc, item) => {
      return acc + item;
    }, 0);

    const discountCalc = totalPrice * this.discount;
    const total = totalPrice - discountCalc;

    return total;
  }
}

class OrderItem {
  private _orderItemName: string;
  private _price: number;

  constructor(orderItemName: string, price: number) {
    this._orderItemName = orderItemName;
    this._price = price;
  }
  get orderItemName(): string {
    return this._orderItemName;
  }

  get price(): number {
    return this._price;
  }
}
