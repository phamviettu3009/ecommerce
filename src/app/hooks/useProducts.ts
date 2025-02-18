"use client";

import { useEffect, useState } from "react";
import Product from "../types/product";
import { useSearchParams } from "next/navigation";
import PageInfo from "../types/pageInfo";

import productServiceClient from "../services/client/product";

function useProducts() {
    const searchParams = useSearchParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [hasLoadAll, setHasLoadAll] = useState<boolean>(false);
    const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const queryParams: string | null = searchParams.toString();
    let cursor: string | null = pageInfo?.endCursor ?? null;

    useEffect(() => {
        clearData();
        getProducts();
    }, [queryParams]);

    const getProducts = async () => {
        setIsLoading(true);

        const response = await productServiceClient.getProducts(queryParams, cursor);
        if (response) {
            setProducts((prev) => [...prev, ...response.nodes]);
            setPageInfo(response.pageInfo);
            setHasLoadAll(!response.pageInfo.hasNextPage);
        }
        setIsLoading(false);
    };

    const clearData = () => {
        cursor = null;
        setPageInfo(null);
        setProducts([]);
        setHasLoadAll(false);
    };

    return { products, getProducts, hasLoadAll, isLoading };
}

export default useProducts;
