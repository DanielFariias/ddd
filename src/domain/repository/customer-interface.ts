import { Customer } from "../entity/customer";
import { RepositoryInterface } from "./repository-interface";

export interface CustomerInterface extends RepositoryInterface<Customer> {}