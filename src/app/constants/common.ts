export const BASE_URL = "http://localhost:3000";
export const API_URL = BASE_URL + "/api";

export const SIZE_PER_PAGE = 10;

export enum ProductFilterType {
    PRICE_RANGE = "PRICE_RANGE",
}

export enum ValueFilterType {
    FILTER_PRICE = "filter.v.price",
}

export enum SortProduct {
    SELECT_OPTIONS = "SELECT_OPTIONS",
    PRICE = "PRICE",
    RELEVANCE = "RELEVANCE",
}
