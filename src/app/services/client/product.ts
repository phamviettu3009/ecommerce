import ListResponse from "@/app/types/listResponse";
import Product from "@/app/types/product";
import { createProductServiceInstance } from "./productImpl";
import ProductFilterItem from "@/app/types/productFilter";

export interface ProductService {
    getProducts: (query: string, cursor: string | null) => Promise<ListResponse<Product> | undefined>;
    getProductFilters: (keyword: string) => Promise<ProductFilterItem[]>;
}

const productService: ProductService = createProductServiceInstance();
export default productService;
