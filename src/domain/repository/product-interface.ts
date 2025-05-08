import { Product } from "../entity/product";
import { RepositoryInterface } from "./repository-interface";

export interface ProductInterface extends RepositoryInterface<Product> {}