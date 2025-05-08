import { Order } from "../entity/order";
import { RepositoryInterface } from "./repository-interface";

export interface OrderInterface extends RepositoryInterface<Order> {}