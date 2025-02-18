import { SIZE_PER_PAGE, SortProduct } from "../../constants/common";
import ListResponse from "../../types/listResponse";
import Product from "../../types/product";
import ProductDetail from "../../types/productDetail";
import ProductFilterItem, { ProductFilterValueItem } from "../../types/productFilter";
import { convertObjectToArrayFilter } from "../../utils/filter";
import { ProductService } from "./product";
import storeFrontShopify from "./storefront-shopify";

export function createProductServiceInstance(): ProductService {
    return new ProductServiceImpl();
}

class ProductServiceImpl implements ProductService {
    async getCategories(): Promise<ProductFilterValueItem[]> {
        const query = `
            query Search {
                search(first: 250, query: "") {
                    productFilters {
                        id
                        label
                        presentation
                        type
                        values {
                            count
                            id
                            input
                            label
                            swatch {
                                color
                            }
                        }
                    }
                }
            }
        `;

        const response = await storeFrontShopify.fetch(query);
        const { data } = await response.json();

        const productFilters: ProductFilterItem[] | undefined = data?.search.productFilters;
        const productFilterItem: ProductFilterItem | undefined = productFilters?.find(
            (item) => item.id === "filter.p.t.category",
        );
        return productFilterItem?.values ?? [];
    }

    async getProduct(handle: string): Promise<ProductDetail | null> {
        const query: string = `
            query Product($handle: String!) {
                product(handle: $handle) {
                    id
                    handle
                    title
                    description
                    descriptionHtml
                    images(first: 10) {
                        nodes {
                            src
                        }
                    }
                    priceRange {
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    options(first: 10) {
                        id
                        name
                        values
                    }
                    variants(first: 50) {
                        nodes {
                            id
                            title
                            price {
                                amount
                                currencyCode
                            }
                            image {
                                src
                            }
                        }
                    }
                }
            }
        `;

        const variables: Record<string, unknown> = {
            handle: handle,
        };

        const response = await storeFrontShopify.fetch(query, { variables: variables });
        const { data } = await response.json();

        const result: ProductDetail | null = data?.product;
        return result;
    }

    async getProducts(
        cursor: string | null,
        keyword: string,
        productFilter: Record<string, any>,
        sort: SortProduct | null,
    ): Promise<ListResponse<Product> | undefined> {
        const filters = productFilter["filter"] ? convertObjectToArrayFilter(productFilter["filter"]) : [];

        const query: string = `
            query Search($keyword: String!, $first: Int!, $after: String, $filter: [ProductFilter!], $sortKey: SearchSortKeys) {
                search(
                    query: $keyword,
                    first: $first,
                    after: $after,
                    productFilters: $filter,
                    sortKey: $sortKey
                ) {
                    pageInfo {
                        endCursor
                        hasNextPage
                        hasPreviousPage
                        startCursor
                    }
                    nodes {
                        ... on Product {
                            id
                            handle
                            title
                            images(first: 10) {
                                nodes {
                                    src
                                }
                            }
                            priceRange {
                                maxVariantPrice {
                                    amount
                                    currencyCode
                                }
                                minVariantPrice {
                                    amount
                                    currencyCode
                                }
                            }
                        }
                    }
                }
            }
        `;

        const variables: Record<string, unknown> = {
            keyword: keyword,
            first: SIZE_PER_PAGE,
            after: cursor,
            filter: filters,
            sortKey: sort,
        };

        const response = await storeFrontShopify.fetch(query, { variables: variables });
        const { data } = await response.json();

        const result: ListResponse<Product> | undefined = data?.search;
        return result;
    }

    async getProductFilters(keyword: string): Promise<ProductFilterItem[]> {
        const query = `
            query Search($keyword: String!) {
                search(first: 250, query: $keyword) {
                    productFilters {
                        id
                        label
                        presentation
                        type
                        values {
                            count
                            id
                            input
                            label
                            swatch {
                                color
                            }
                        }
                    }
                }
            }
        `;

        const variables: Record<string, unknown> = {
            keyword: keyword,
        };

        const response = await storeFrontShopify.fetch(query, {
            variables: variables,
        });
        const { data } = await response.json();

        const result: ProductFilterItem[] | undefined = data?.search.productFilters;
        return result ?? [];
    }
}
