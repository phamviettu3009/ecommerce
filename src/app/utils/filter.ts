/* eslint-disable @typescript-eslint/no-explicit-any */

import ProductFilterItem, { ProductFilterValueItem } from "../types/productFilter";

export function replaceInputFilter(productFilterItems: ProductFilterItem[]): ProductFilterItem[] {
    return productFilterItems.map((prodFilter) => ({
        ...prodFilter,
        values: prodFilter.values.map((value) => ({ ...value, input: value.input.replace(/\\+/g, "") })),
    }));
}

export function convertObjectToArrayFilter(input: Record<string, any>): Array<Record<string, any>> {
    const transformedFilter: any[] = [];

    Object.entries(input).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => {
                transformedFilter.push({ [key]: item });
            });
        } else if (typeof value === "object" && value !== null) {
            const subKeys = Object.keys(value);
            const length = value[subKeys[0]].length;
            for (let i = 0; i < length; i++) {
                const subItem: Record<string, any> = {};
                subKeys.forEach((subKey) => {
                    subItem[subKey] = value[subKey][i];
                });
                transformedFilter.push({ [key]: subItem });
            }
        }
    });

    return transformedFilter;
}

export function queryStringToObject(queryString: string): Record<string, any> {
    const result: Record<string, any> = {};

    const params = queryString.split("&");

    params.forEach((param) => {
        const [key, value] = param.split("=");

        // Nếu value rỗng, bỏ qua
        if (!value) return;

        const keys = key.split(".");

        let current = result;
        keys.forEach((k, index) => {
            if (index === keys.length - 1) {
                const values = value.split(",").filter((v) => v !== "");
                if (values.length === 0) return;

                if (current[k] === undefined) {
                    current[k] = values;
                } else if (Array.isArray(current[k])) {
                    current[k] = [...current[k], ...values];
                } else {
                    current[k] = [current[k], ...values];
                }
            } else {
                if (!current[k]) {
                    current[k] = {};
                }
                current = current[k];
            }
        });
    });

    return result;
}

export function objectToQueryString(obj: Record<string, any>, prefix: string = "filter"): string {
    const queryParts: string[] = [];

    for (const [key, value] of Object.entries(obj)) {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === "object" && !Array.isArray(value) && value !== null) {
            queryParts.push(objectToQueryString(value, newKey));
        } else {
            queryParts.push(`${newKey}=${value}`);
        }
    }

    return queryParts.join("&");
}

export function extractFilterParams(queryString: string): string {
    const params = new URLSearchParams(queryString);
    const filterParams: string[] = [];

    params.forEach((value, key) => {
        if (key.startsWith("filter")) {
            filterParams.push(`${key}=${value}`);
        }
    });

    return filterParams.join("&");
}

export function transformObject(
    input: Record<string, any>,
    options: {
        asNumbers?: string[];
        asStrings?: string[];
    },
): Record<string, any> {
    if (input["filter"] == undefined) {
        return input;
    }

    const { asNumbers = [], asStrings = [] } = options;

    const setValueByPath = (obj: any, path: string, transformFn: (value: any) => any) => {
        const keys = path.split(".");
        let current = obj;

        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }

        const lastKey = keys[keys.length - 1];
        if (current?.[lastKey]) {
            if (Array.isArray(current[lastKey])) {
                current[lastKey] = current[lastKey].map((value: any) => transformFn(value));
            } else {
                current[lastKey] = transformFn(current[lastKey]);
            }
        }
    };

    const result = JSON.parse(JSON.stringify(input));

    asNumbers.forEach((path) => {
        setValueByPath(result, path, (value) => Number(value));
    });

    asStrings.forEach((path) => {
        setValueByPath(result, path, (value) => String(value));
    });

    return result;
}

export function convertFilterTagData(input: ProductFilterValueItem[]): ProductFilterItem[] {
    const groupMap: Record<string, ProductFilterItem> = {};

    input.forEach((item) => {
        const [_group, _label] = item.label.split("__");

        const group = _label ? _group : "tags";
        const label = _label ? _label : _group;

        if (!groupMap[group]) {
            groupMap[group] = {
                id: `filter.p.${group}`,
                label: group,
                presentation: "TEXT",
                type: "LIST",
                values: [],
            };
        }

        groupMap[group].values.push({
            ...item,
            label,
        });
    });

    return Object.values(groupMap);
}
