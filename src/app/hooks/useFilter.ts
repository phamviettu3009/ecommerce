import { useRouter, useSearchParams } from "next/navigation";

import ProductFilterItem from "../types/productFilter";
import { useEffect, useState } from "react";
import {
    extractFilterParams,
    convertObjectToArrayFilter,
    objectToQueryString,
    queryStringToObject,
    replaceInputFilter,
    convertFilterTagData,
} from "../utils/filter";
import { useDebounce } from "./useDebounce";
import { ProductFilterType } from "../constants/common";
import productService from "../services/client/product";

function useFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [productFilters, setProductFilters] = useState<ProductFilterItem[]>([]);
    const [filterSelected, setFilterSelected] = useState<Record<string, boolean>>({});
    const [priceFilter, setPriceFilter] = useState<ProductFilterItem | null>(null);
    const [rangePrice, setRangePrice] = useState<{ range: number[]; filter: number[] }>({ range: [], filter: [] });

    const searchKeyword: string | null = searchParams.get("search") ?? "";

    useEffect(() => {
        getProductFilters();
        extractSelectedFiltersFromURL();
    }, [searchKeyword]);

    useEffect(() => {
        extractSelectedFiltersFromURL();
        extractFilterPrice(productFilters);
    }, [searchParams]);

    const getProductFilters = async () => {
        const productFilters: ProductFilterItem[] | undefined = await productService.getProductFilters(searchKeyword);
        const productFilterReplaced: ProductFilterItem[] = replaceInputFilter(productFilters);
        const productFilterWithoutTags: ProductFilterItem[] = productFilterReplaced.filter(
            (item) => item.id !== "filter.p.tag",
        );
        const filterTags: ProductFilterItem[] = extractFilterTags(productFilterReplaced);
        setProductFilters([...productFilterWithoutTags, ...filterTags]);
        extractFilterPrice(productFilterWithoutTags);
    };

    const extractFilterTags = (productFilters: ProductFilterItem[]): ProductFilterItem[] => {
        const filterTags: ProductFilterItem | undefined = productFilters.find((item) => item.id === "filter.p.tag");
        if (filterTags) {
            const convert = convertFilterTagData(filterTags.values);
            return convert;
        }

        return [];
    };

    const extractFilterPrice = (productFilters: ProductFilterItem[]) => {
        const record: ProductFilterItem | undefined = productFilters.find(
            (item) => item.type === ProductFilterType.PRICE_RANGE,
        );
        if (record) {
            const {
                price: { min, max },
            } = JSON.parse(record.values[0].input);

            const minParams: number = Number(searchParams.get("filter.price.min") ?? NaN);
            const maxParams: number = Number(searchParams.get("filter.price.max") ?? NaN);

            setPriceFilter(record);

            if (Number.isNaN(minParams) || Number.isNaN(maxParams)) {
                setRangePrice({ range: [min, max], filter: [min, max] });
            } else {
                setRangePrice({ range: [min, max], filter: [minParams, maxParams] });
            }
        }
    };

    const extractSelectedFiltersFromURL = () => {
        const filterParams: string = extractFilterParams(searchParams.toString());
        const filterObj: Record<string, any> = queryStringToObject(filterParams);
        if (filterObj["filter"]) {
            const filters: Array<Record<string, any>> = convertObjectToArrayFilter(filterObj["filter"]);
            const filterSelectedHashMap: Record<string, boolean> = filters.reduce((target, value) => {
                target[JSON.stringify(value)] = true;
                return target;
            }, {});
            setFilterSelected(filterSelectedHashMap);
        } else {
            setFilterSelected({});
        }
    };

    const onFilter = (input: string, checked: boolean) => {
        setFilterSelected((selected) => ({ ...selected, [input]: checked }));
        updateURLParams(input, checked);
    };

    const updateURLParams = (input: string, checked?: boolean | undefined) => {
        const currentParams: URLSearchParams = new URLSearchParams(window.location.search);
        const filterString: string = objectToQueryString(JSON.parse(input));
        const params: string[] = filterString.split("&");
        params.forEach((param) => {
            const [key, valueFilter] = param.split("=");
            const valueByKey: string | null = currentParams.get(key);

            if (checked === undefined) {
                currentParams.set(key, valueFilter);
            } else if (checked) {
                if (valueByKey) {
                    currentParams.set(key, valueByKey + valueFilter + ",");
                } else {
                    currentParams.set(key, valueFilter + ",");
                }
            } else {
                if (valueByKey === null) return;
                const newValue: string = valueByKey.replace(valueFilter + ",", "");

                if (newValue === "") {
                    currentParams.delete(key, valueFilter + ",");
                } else {
                    currentParams.set(key, newValue);
                }
            }
        });
        router.push(`${window.location.pathname}?${currentParams.toString()}`);
    };

    const onDebouncedPriceRangeChange = useDebounce((rangePrice: number[]) => {
        const input: string = `{ "price": { "min": ${rangePrice[0]}, "max": ${rangePrice[1]} } }`;
        updateURLParams(input);
    }, 1000);

    const onChangeFilterRangePrice = (rangePrice: number[]) => {
        setRangePrice((prev) => ({ ...prev, filter: rangePrice }));
        onDebouncedPriceRangeChange(rangePrice);
    };

    return {
        productFilters,
        onFilter,
        onChangeFilterRangePrice,
        filterSelected,
        priceFilter,
        rangePrice,
    };
}

export default useFilter;
