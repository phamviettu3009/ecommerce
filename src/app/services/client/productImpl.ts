import ListResponse from "@/app/types/listResponse";
import Product from "@/app/types/product";
import { ProductService } from "./product";
import axiosClient from "./axios";
import { AxiosResponse } from "axios";
import { API_URL } from "@/app/constants/common";
import ProductFilterItem from "@/app/types/productFilter";

export function createProductServiceInstance(): ProductService {
    return new ProductServiceImpl();
}

class ProductServiceImpl implements ProductService {
    async getProducts(query: string, cursor: string | null): Promise<ListResponse<Product> | undefined> {
        const url = new URL(`${API_URL}/products${query ? "?" + query : ""}`.trimEnd());

        if (cursor) {
            url.searchParams.append("cursor", cursor);
        }

        try {
            const response: AxiosResponse<ListResponse<Product>, any> = await axiosClient.get(url.toString());
            return response.data;
        } catch (error) {
            throw new Error("Get products error " + error);
        }
    }

    async getProductFilters(keyword: string): Promise<ProductFilterItem[]> {
        try {
            const response: AxiosResponse<ProductFilterItem[], any> = await axiosClient.get(`/products/filter`, {
                params: { search: keyword || null },
            });
            return response.data;
        } catch (error) {
            throw new Error("Get filters error " + error);
        }
    }
}
