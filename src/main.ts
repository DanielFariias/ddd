import { Address } from "./domain/entity/address";
import { Customer } from "./domain/entity/customer";
import { Order } from "./domain/entity/order";
import { OrderItem } from "./domain/entity/order-item";

// Customer Aggregate - ID
let customer = new Customer("1", "John Doe");
const address = new Address("Street 1", 100, "City 1", "State 1", "ZipCode 1");
customer.setAddress(address);
customer.activate();

// Order Aggregate - Object / Entity
const item1 = new OrderItem("1", "Item 1", 10, 2, 'productId');
const item2 = new OrderItem("2", "Item 2", 20, 2, 'productId');
const order = new Order("1", '123', [item1, item2]);

