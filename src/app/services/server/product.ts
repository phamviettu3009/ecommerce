import { SortProduct } from "../../constants/common";
import ListResponse from "../../types/listResponse";
import Product from "../../types/product";
import ProductDetail from "../../types/productDetail";
import ProductFilterItem, { ProductFilterValueItem } from "../../types/productFilter";
import { createProductServiceInstance } from "./productImpl";

export interface ProductService {
    getCategories: () => Promise<ProductFilterValueItem[]>;
    getProduct: (handle: string) => Promise<ProductDetail | null>;
    getProducts: (
        cursor: string | null,
        keyword: string,
        productFilter: Record<string, any>,
        sort: SortProduct | null,
    ) => Promise<ListResponse<Product> | undefined>;
    getProductFilters: (keyword: string) => Promise<ProductFilterItem[]>;
}

const productService: ProductService = createProductServiceInstance();
export default productService;
