module.exports = {

"[project]/src/app/products/[handle]/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "active": "styles-module-scss-module__5n-ZTq__active",
  "card-view": "styles-module-scss-module__5n-ZTq__card-view",
  "image_view__main_picture": "styles-module-scss-module__5n-ZTq__image_view__main_picture",
  "page": "styles-module-scss-module__5n-ZTq__page",
  "prod-info-view": "styles-module-scss-module__5n-ZTq__prod-info-view",
  "prod-info-view__price": "styles-module-scss-module__5n-ZTq__prod-info-view__price",
  "prod-info-view__title": "styles-module-scss-module__5n-ZTq__prod-info-view__title",
  "variant": "styles-module-scss-module__5n-ZTq__variant",
  "variant-wrap": "styles-module-scss-module__5n-ZTq__variant-wrap",
  "variant-wrap-item": "styles-module-scss-module__5n-ZTq__variant-wrap-item",
  "variant-wrap-item__name": "styles-module-scss-module__5n-ZTq__variant-wrap-item__name",
  "variant__option-label": "styles-module-scss-module__5n-ZTq__variant__option-label",
  "variant__price": "styles-module-scss-module__5n-ZTq__variant__price",
});
}}),
"[project]/src/app/constants/common.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ProductFilterType": (()=>ProductFilterType),
    "SIZE_PER_PAGE": (()=>SIZE_PER_PAGE),
    "SortProduct": (()=>SortProduct),
    "ValueFilterType": (()=>ValueFilterType)
});
const SIZE_PER_PAGE = 10;
var ProductFilterType = /*#__PURE__*/ function(ProductFilterType) {
    ProductFilterType["PRICE_RANGE"] = "PRICE_RANGE";
    return ProductFilterType;
}({});
var ValueFilterType = /*#__PURE__*/ function(ValueFilterType) {
    ValueFilterType["FILTER_PRICE"] = "filter.v.price";
    return ValueFilterType;
}({});
var SortProduct = /*#__PURE__*/ function(SortProduct) {
    SortProduct["SELECT_OPTIONS"] = "SELECT_OPTIONS";
    SortProduct["PRICE"] = "PRICE";
    SortProduct["RELEVANCE"] = "RELEVANCE";
    return SortProduct;
}({});
}}),
"[project]/src/app/utils/filter.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_esm__({
    "convertFilterTagData": (()=>convertFilterTagData),
    "convertObjectToArrayFilter": (()=>convertObjectToArrayFilter),
    "extractFilterParams": (()=>extractFilterParams),
    "objectToQueryString": (()=>objectToQueryString),
    "queryStringToObject": (()=>queryStringToObject),
    "replaceInputFilter": (()=>replaceInputFilter),
    "transformObject": (()=>transformObject)
});
function replaceInputFilter(productFilterItems) {
    return productFilterItems.map((prodFilter)=>({
            ...prodFilter,
            values: prodFilter.values.map((value)=>({
                    ...value,
                    input: value.input.replace(/\\+/g, "")
                }))
        }));
}
function convertObjectToArrayFilter(input) {
    const transformedFilter = [];
    Object.entries(input).forEach(([key, value])=>{
        if (Array.isArray(value)) {
            value.forEach((item)=>{
                transformedFilter.push({
                    [key]: item
                });
            });
        } else if (typeof value === "object" && value !== null) {
            const subKeys = Object.keys(value);
            const length = value[subKeys[0]].length;
            for(let i = 0; i < length; i++){
                const subItem = {};
                subKeys.forEach((subKey)=>{
                    subItem[subKey] = value[subKey][i];
                });
                transformedFilter.push({
                    [key]: subItem
                });
            }
        }
    });
    return transformedFilter;
}
function queryStringToObject(queryString) {
    const result = {};
    const params = queryString.split("&");
    params.forEach((param)=>{
        const [key, value] = param.split("=");
        // Nếu value rỗng, bỏ qua
        if (!value) return;
        const keys = key.split(".");
        let current = result;
        keys.forEach((k, index)=>{
            if (index === keys.length - 1) {
                const values = value.split(",").filter((v)=>v !== "");
                if (values.length === 0) return;
                if (current[k] === undefined) {
                    current[k] = values;
                } else if (Array.isArray(current[k])) {
                    current[k] = [
                        ...current[k],
                        ...values
                    ];
                } else {
                    current[k] = [
                        current[k],
                        ...values
                    ];
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
function objectToQueryString(obj, prefix = "filter") {
    const queryParts = [];
    for (const [key, value] of Object.entries(obj)){
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof value === "object" && !Array.isArray(value) && value !== null) {
            queryParts.push(objectToQueryString(value, newKey));
        } else {
            queryParts.push(`${newKey}=${value}`);
        }
    }
    return queryParts.join("&");
}
function extractFilterParams(queryString) {
    const params = new URLSearchParams(queryString);
    const filterParams = [];
    params.forEach((value, key)=>{
        if (key.startsWith("filter")) {
            filterParams.push(`${key}=${value}`);
        }
    });
    return filterParams.join("&");
}
function transformObject(input, options) {
    if (input["filter"] == undefined) {
        return input;
    }
    const { asNumbers = [], asStrings = [] } = options;
    const setValueByPath = (obj, path, transformFn)=>{
        const keys = path.split(".");
        let current = obj;
        for(let i = 0; i < keys.length - 1; i++){
            current = current[keys[i]];
        }
        const lastKey = keys[keys.length - 1];
        if (current?.[lastKey]) {
            if (Array.isArray(current[lastKey])) {
                current[lastKey] = current[lastKey].map((value)=>transformFn(value));
            } else {
                current[lastKey] = transformFn(current[lastKey]);
            }
        }
    };
    const result = JSON.parse(JSON.stringify(input));
    asNumbers.forEach((path)=>{
        setValueByPath(result, path, (value)=>Number(value));
    });
    asStrings.forEach((path)=>{
        setValueByPath(result, path, (value)=>String(value));
    });
    return result;
}
function convertFilterTagData(input) {
    const groupMap = {};
    input.forEach((item)=>{
        const [_group, _label] = item.label.split("__");
        const group = _label ? _group : "tags";
        const label = _label ? _label : _group;
        if (!groupMap[group]) {
            groupMap[group] = {
                id: `filter.p.${group}`,
                label: group,
                presentation: "TEXT",
                type: "LIST",
                values: []
            };
        }
        groupMap[group].values.push({
            ...item,
            label
        });
    });
    return Object.values(groupMap);
}
}}),
"[project]/src/app/services/storefront.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@shopify/storefront-api-client/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$storefront$2d$api$2d$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/storefront-api-client/dist/storefront-api-client.mjs [app-rsc] (ecmascript)");
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$storefront$2d$api$2d$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStorefrontApiClient"])({
    storeDomain: ("TURBOPACK compile-time value", "https://t3qihh-pt.myshopify.com"),
    apiVersion: ("TURBOPACK compile-time value", "unstable"),
    publicAccessToken: ("TURBOPACK compile-time value", "15eb9c8445336761803a7a4e899be38a")
});
const __TURBOPACK__default__export__ = client;
}}),
"[project]/src/app/services/productImpl.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createProductServiceInstance": (()=>createProductServiceInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/constants/common.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/filter.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/storefront.ts [app-rsc] (ecmascript)");
;
;
;
function createProductServiceInstance() {
    return new ProductServiceImpl();
}
class ProductServiceImpl {
    async getCategories() {
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fetch(query);
        const { data } = await response.json();
        const productFilters = data?.search.productFilters;
        const productFilterItem = productFilters?.find((item)=>item.id === "filter.p.t.category");
        return productFilterItem?.values ?? [];
    }
    async getProduct(handle) {
        const query = `
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
        const variables = {
            handle: handle
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fetch(query, {
            variables: variables
        });
        const { data } = await response.json();
        const result = data?.product;
        return result;
    }
    async getProducts(cursor, keyword, productFilter, sort) {
        const filters = productFilter["filter"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertObjectToArrayFilter"])(productFilter["filter"]) : [];
        const query = `
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
        const variables = {
            keyword: keyword,
            first: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIZE_PER_PAGE"],
            after: cursor,
            filter: filters,
            sortKey: sort
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fetch(query, {
            variables: variables
        });
        const { data } = await response.json();
        const result = data?.search;
        return result;
    }
    async getProductFilters(keyword) {
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
        const variables = {
            keyword: keyword
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fetch(query, {
            variables: variables
        });
        const { data } = await response.json();
        const result = data?.search.productFilters;
        return result ?? [];
    }
}
}}),
"[project]/src/app/services/product.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$productImpl$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/productImpl.ts [app-rsc] (ecmascript)");
;
const productService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$productImpl$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProductServiceInstance"])();
const __TURBOPACK__default__export__ = productService;
}}),
"[project]/src/app/products/[handle]/ImageView.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/[handle]/ImageView.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/[handle]/ImageView.tsx <module evaluation>", "default");
}}),
"[project]/src/app/products/[handle]/ImageView.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/[handle]/ImageView.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/[handle]/ImageView.tsx", "default");
}}),
"[project]/src/app/products/[handle]/ImageView.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$ImageView$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/app/products/[handle]/ImageView.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$ImageView$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/ImageView.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$ImageView$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/src/app/utils/css.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "classes": (()=>classes)
});
const classes = (styles, classes)=>{
    const list = classes.split(" ");
    classes = "";
    for (const className of list){
        classes += `${styles[className] ?? className} `;
    }
    return classes.trimEnd();
};
}}),
"[project]/src/app/products/[handle]/Variants.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/[handle]/Variants.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/[handle]/Variants.tsx <module evaluation>", "default");
}}),
"[project]/src/app/products/[handle]/Variants.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/[handle]/Variants.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/[handle]/Variants.tsx", "default");
}}),
"[project]/src/app/products/[handle]/Variants.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$Variants$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/app/products/[handle]/Variants.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$Variants$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/Variants.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$Variants$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/src/app/utils/string.extensions.ts [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// eslint-disable-next-line @typescript-eslint/no-unused-vars
String.prototype.isEmpty = function() {
    return this.length === 0;
};
}}),
"[project]/src/app/products/[handle]/Description.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$css$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/css.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$string$2e$extensions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/string.extensions.ts [app-rsc] (ecmascript)");
;
;
;
;
function Description({ descriptionHtml }) {
    if (descriptionHtml.isEmpty()) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$css$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classes"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"], "card-view prod-info-view mt-3"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            dangerouslySetInnerHTML: {
                __html: descriptionHtml
            }
        }, void 0, false, {
            fileName: "[project]/src/app/products/[handle]/Description.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/products/[handle]/Description.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Description;
}}),
"[project]/src/app/utils/product.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "extractProductVariantID": (()=>extractProductVariantID),
    "isDefaultProduct": (()=>isDefaultProduct)
});
function isDefaultProduct(variants) {
    if (variants.length === 1 && variants[0].title === "Default Title") {
        return true;
    }
    return false;
}
function extractProductVariantID(value) {
    return value.replace("gid://shopify/ProductVariant/", "");
}
}}),
"[project]/src/app/products/[handle]/QuantityControl.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$css$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/css.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/product.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
;
function QuantityControl({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$css$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classes"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"], "card-view"),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDefaultProduct"])(product.variants.nodes) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/products/[handle]/QuantityControl.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/products/[handle]/QuantityControl.tsx",
            lineNumber: 15,
            columnNumber: 57
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "2"
        }, void 0, false)
    }, void 0, false, {
        fileName: "[project]/src/app/products/[handle]/QuantityControl.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = QuantityControl;
}}),
"[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/product.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$ImageView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/ImageView.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$css$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/css.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$Variants$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/Variants.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$Description$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/Description.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$QuantityControl$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/QuantityControl.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function ProductPage({ params }) {
    const handle = (await params)?.handle;
    if (handle === undefined) {
        return null;
    }
    const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].getProduct(decodeURIComponent(handle));
    if (product === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                children: "Product not found!"
            }, void 0, false, {
                fileName: "[project]/src/app/products/[handle]/page.tsx",
                lineNumber: 30,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/products/[handle]/page.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this);
    }
    const { title, variants, descriptionHtml } = product;
    const { amount: minAmount, currencyCode } = product?.priceRange.minVariantPrice;
    const { amount: maxAmount } = product?.priceRange.maxVariantPrice;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-fluid ps-0 pe-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["card-view"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$ImageView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[handle]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/[handle]/page.tsx",
                            lineNumber: 44,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/[handle]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$css$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classes"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"], "card-view prod-info-view"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$css$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classes"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"], "prod-info-view__title"),
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[handle]/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 29
                                    }, this),
                                    minAmount !== maxAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$css$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classes"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"], "prod-info-view__price"),
                                        children: [
                                            "(",
                                            minAmount,
                                            " - ",
                                            maxAmount,
                                            ") ",
                                            currencyCode
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/[handle]/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$Variants$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        options: product.options,
                                        variants: variants.nodes
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[handle]/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/[handle]/page.tsx",
                                lineNumber: 49,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$Description$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                descriptionHtml: descriptionHtml
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[handle]/page.tsx",
                                lineNumber: 59,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/[handle]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$QuantityControl$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            product: product
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/[handle]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/[handle]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/[handle]/page.tsx",
                lineNumber: 42,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/products/[handle]/page.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/products/[handle]/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = ProductPage;
}}),
"[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/products/[handle]/page/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/@shopify/graphql-client/dist/graphql-client/constants.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "BOUNDARY_HEADER_REGEX": (()=>BOUNDARY_HEADER_REGEX),
    "CLIENT": (()=>CLIENT),
    "CONTENT_TYPES": (()=>CONTENT_TYPES),
    "DEFAULT_CLIENT_VERSION": (()=>DEFAULT_CLIENT_VERSION),
    "DEFAULT_SDK_VARIANT": (()=>DEFAULT_SDK_VARIANT),
    "DEFER_OPERATION_REGEX": (()=>DEFER_OPERATION_REGEX),
    "GQL_API_ERROR": (()=>GQL_API_ERROR),
    "HEADER_SEPARATOR": (()=>HEADER_SEPARATOR),
    "MAX_RETRIES": (()=>MAX_RETRIES),
    "MIN_RETRIES": (()=>MIN_RETRIES),
    "NEWLINE_SEPARATOR": (()=>NEWLINE_SEPARATOR),
    "NO_DATA_OR_ERRORS_ERROR": (()=>NO_DATA_OR_ERRORS_ERROR),
    "RETRIABLE_STATUS_CODES": (()=>RETRIABLE_STATUS_CODES),
    "RETRY_WAIT_TIME": (()=>RETRY_WAIT_TIME),
    "SDK_VARIANT_HEADER": (()=>SDK_VARIANT_HEADER),
    "SDK_VERSION_HEADER": (()=>SDK_VERSION_HEADER),
    "UNEXPECTED_CONTENT_TYPE_ERROR": (()=>UNEXPECTED_CONTENT_TYPE_ERROR)
});
const CLIENT = 'GraphQL Client';
const MIN_RETRIES = 0;
const MAX_RETRIES = 3;
const GQL_API_ERROR = "An error occurred while fetching from the API. Review 'graphQLErrors' for details.";
const UNEXPECTED_CONTENT_TYPE_ERROR = 'Response returned unexpected Content-Type:';
const NO_DATA_OR_ERRORS_ERROR = 'An unknown error has occurred. The API did not return a data object or any errors in its response.';
const CONTENT_TYPES = {
    json: 'application/json',
    multipart: 'multipart/mixed'
};
const SDK_VARIANT_HEADER = 'X-SDK-Variant';
const SDK_VERSION_HEADER = 'X-SDK-Version';
const DEFAULT_SDK_VARIANT = 'shopify-graphql-client';
// This is value is replaced with package.json version during rollup build process
const DEFAULT_CLIENT_VERSION = '1.2.1';
const RETRY_WAIT_TIME = 1000;
const RETRIABLE_STATUS_CODES = [
    429,
    503
];
const DEFER_OPERATION_REGEX = /@(defer)\b/i;
const NEWLINE_SEPARATOR = '\r\n';
const BOUNDARY_HEADER_REGEX = /boundary="?([^=";]+)"?/i;
const HEADER_SEPARATOR = NEWLINE_SEPARATOR + NEWLINE_SEPARATOR;
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/@shopify/graphql-client/dist/graphql-client/utilities.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "buildCombinedDataObject": (()=>buildCombinedDataObject),
    "buildDataObjectByPath": (()=>buildDataObjectByPath),
    "combineErrors": (()=>combineErrors),
    "formatErrorMessage": (()=>formatErrorMessage),
    "getErrorCause": (()=>getErrorCause),
    "getErrorMessage": (()=>getErrorMessage),
    "getKeyValueIfValid": (()=>getKeyValueIfValid),
    "validateRetries": (()=>validateRetries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/constants.mjs [app-rsc] (ecmascript)");
;
function formatErrorMessage(message, client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLIENT"]) {
    return message.startsWith(`${client}`) ? message : `${client}: ${message}`;
}
function getErrorMessage(error) {
    return error instanceof Error ? error.message : JSON.stringify(error);
}
function getErrorCause(error) {
    return error instanceof Error && error.cause ? error.cause : undefined;
}
function combineErrors(dataArray) {
    return dataArray.flatMap(({ errors })=>{
        return errors ?? [];
    });
}
function validateRetries({ client, retries }) {
    if (retries !== undefined && (typeof retries !== 'number' || retries < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MIN_RETRIES"] || retries > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_RETRIES"])) {
        throw new Error(`${client}: The provided "retries" value (${retries}) is invalid - it cannot be less than ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MIN_RETRIES"]} or greater than ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_RETRIES"]}`);
    }
}
function getKeyValueIfValid(key, value) {
    return value && (typeof value !== 'object' || Array.isArray(value) || typeof value === 'object' && Object.keys(value).length > 0) ? {
        [key]: value
    } : {};
}
function buildDataObjectByPath(path, data) {
    if (path.length === 0) {
        return data;
    }
    const key = path.pop();
    const newData = {
        [key]: data
    };
    if (path.length === 0) {
        return newData;
    }
    return buildDataObjectByPath(path, newData);
}
function combineObjects(baseObject, newObject) {
    return Object.keys(newObject || {}).reduce((acc, key)=>{
        if ((typeof newObject[key] === 'object' || Array.isArray(newObject[key])) && baseObject[key]) {
            acc[key] = combineObjects(baseObject[key], newObject[key]);
            return acc;
        }
        acc[key] = newObject[key];
        return acc;
    }, Array.isArray(baseObject) ? [
        ...baseObject
    ] : {
        ...baseObject
    });
}
function buildCombinedDataObject([initialDatum, ...remainingData]) {
    return remainingData.reduce(combineObjects, {
        ...initialDatum
    });
}
;
 //# sourceMappingURL=utilities.mjs.map
}}),
"[project]/node_modules/@shopify/graphql-client/dist/graphql-client/http-fetch.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "generateHttpFetch": (()=>generateHttpFetch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/constants.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/utilities.mjs [app-rsc] (ecmascript)");
;
;
function generateHttpFetch({ clientLogger, customFetchApi = fetch, client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLIENT"], defaultRetryWaitTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RETRY_WAIT_TIME"], retriableCodes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RETRIABLE_STATUS_CODES"] }) {
    const httpFetch = async (requestParams, count, maxRetries)=>{
        const nextCount = count + 1;
        const maxTries = maxRetries + 1;
        let response;
        try {
            response = await customFetchApi(...requestParams);
            clientLogger({
                type: 'HTTP-Response',
                content: {
                    requestParams,
                    response
                }
            });
            if (!response.ok && retriableCodes.includes(response.status) && nextCount <= maxTries) {
                throw new Error();
            }
            return response;
        } catch (error) {
            if (nextCount <= maxTries) {
                const retryAfter = response?.headers.get('Retry-After');
                await sleep(retryAfter ? parseInt(retryAfter, 10) : defaultRetryWaitTime);
                clientLogger({
                    type: 'HTTP-Retry',
                    content: {
                        requestParams,
                        lastResponse: response,
                        retryAttempt: count,
                        maxRetries
                    }
                });
                return httpFetch(requestParams, nextCount, maxRetries);
            }
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrorMessage"])(`${maxRetries > 0 ? `Attempted maximum number of ${maxRetries} network retries. Last message - ` : ''}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(error)}`, client));
        }
    };
    return httpFetch;
}
async function sleep(waitTime) {
    return new Promise((resolve)=>setTimeout(resolve, waitTime));
}
;
 //# sourceMappingURL=http-fetch.mjs.map
}}),
"[project]/node_modules/@shopify/graphql-client/dist/graphql-client/graphql-client.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createGraphQLClient": (()=>createGraphQLClient),
    "generateClientLogger": (()=>generateClientLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$http$2d$fetch$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/http-fetch.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/constants.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/utilities.mjs [app-rsc] (ecmascript)");
;
;
;
function createGraphQLClient({ headers, url, customFetchApi = fetch, retries = 0, logger }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateRetries"])({
        client: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLIENT"],
        retries
    });
    const config = {
        headers,
        url,
        retries
    };
    const clientLogger = generateClientLogger(logger);
    const httpFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$http$2d$fetch$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateHttpFetch"])({
        customFetchApi,
        clientLogger,
        defaultRetryWaitTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RETRY_WAIT_TIME"]
    });
    const fetchFn = generateFetch(httpFetch, config);
    const request = generateRequest(fetchFn);
    const requestStream = generateRequestStream(fetchFn);
    return {
        config,
        fetch: fetchFn,
        request,
        requestStream
    };
}
function generateClientLogger(logger) {
    return (logContent)=>{
        if (logger) {
            logger(logContent);
        }
    };
}
async function processJSONResponse(response) {
    const { errors, data, extensions } = await response.json();
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('data', data),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('extensions', extensions),
        headers: response.headers,
        ...errors || !data ? {
            errors: {
                networkStatusCode: response.status,
                message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrorMessage"])(errors ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GQL_API_ERROR"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NO_DATA_OR_ERRORS_ERROR"]),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('graphQLErrors', errors),
                response
            }
        } : {}
    };
}
function generateFetch(httpFetch, { url, headers, retries }) {
    return async (operation, options = {})=>{
        const { variables, headers: overrideHeaders, url: overrideUrl, retries: overrideRetries, signal } = options;
        const body = JSON.stringify({
            query: operation,
            variables
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateRetries"])({
            client: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLIENT"],
            retries: overrideRetries
        });
        const flatHeaders = Object.entries({
            ...headers,
            ...overrideHeaders
        }).reduce((headers, [key, value])=>{
            headers[key] = Array.isArray(value) ? value.join(', ') : value.toString();
            return headers;
        }, {});
        if (!flatHeaders[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SDK_VARIANT_HEADER"]] && !flatHeaders[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SDK_VERSION_HEADER"]]) {
            flatHeaders[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SDK_VARIANT_HEADER"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SDK_VARIANT"];
            flatHeaders[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SDK_VERSION_HEADER"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_CLIENT_VERSION"];
        }
        const fetchParams = [
            overrideUrl ?? url,
            {
                method: 'POST',
                headers: flatHeaders,
                body,
                signal
            }
        ];
        return httpFetch(fetchParams, 1, overrideRetries ?? retries);
    };
}
function generateRequest(fetchFn) {
    return async (...props)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFER_OPERATION_REGEX"].test(props[0])) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrorMessage"])('This operation will result in a streamable response - use requestStream() instead.'));
        }
        try {
            const response = await fetchFn(...props);
            const { status, statusText } = response;
            const contentType = response.headers.get('content-type') || '';
            if (!response.ok) {
                return {
                    errors: {
                        networkStatusCode: status,
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrorMessage"])(statusText),
                        response
                    }
                };
            }
            if (!contentType.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTENT_TYPES"].json)) {
                return {
                    errors: {
                        networkStatusCode: status,
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrorMessage"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UNEXPECTED_CONTENT_TYPE_ERROR"]} ${contentType}`),
                        response
                    }
                };
            }
            return processJSONResponse(response);
        } catch (error) {
            return {
                errors: {
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(error)
                }
            };
        }
    };
}
async function* getStreamBodyIterator(response) {
    const decoder = new TextDecoder();
    // Response body is an async iterator
    if (response.body[Symbol.asyncIterator]) {
        for await (const chunk of response.body){
            yield decoder.decode(chunk);
        }
    } else {
        const reader = response.body.getReader();
        let readResult;
        try {
            while(!(readResult = await reader.read()).done){
                yield decoder.decode(readResult.value);
            }
        } finally{
            reader.cancel();
        }
    }
}
function readStreamChunk(streamBodyIterator, boundary) {
    return {
        async *[Symbol.asyncIterator] () {
            try {
                let buffer = '';
                for await (const textChunk of streamBodyIterator){
                    buffer += textChunk;
                    if (buffer.indexOf(boundary) > -1) {
                        const lastBoundaryIndex = buffer.lastIndexOf(boundary);
                        const fullResponses = buffer.slice(0, lastBoundaryIndex);
                        const chunkBodies = fullResponses.split(boundary).filter((chunk)=>chunk.trim().length > 0).map((chunk)=>{
                            const body = chunk.slice(chunk.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HEADER_SEPARATOR"]) + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HEADER_SEPARATOR"].length).trim();
                            return body;
                        });
                        if (chunkBodies.length > 0) {
                            yield chunkBodies;
                        }
                        buffer = buffer.slice(lastBoundaryIndex + boundary.length);
                        if (buffer.trim() === `--`) {
                            buffer = '';
                        }
                    }
                }
            } catch (error) {
                throw new Error(`Error occured while processing stream payload - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(error)}`);
            }
        }
    };
}
function createJsonResponseAsyncIterator(response) {
    return {
        async *[Symbol.asyncIterator] () {
            const processedResponse = await processJSONResponse(response);
            yield {
                ...processedResponse,
                hasNext: false
            };
        }
    };
}
function getResponseDataFromChunkBodies(chunkBodies) {
    return chunkBodies.map((value)=>{
        try {
            return JSON.parse(value);
        } catch (error) {
            throw new Error(`Error in parsing multipart response - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(error)}`);
        }
    }).map((payload)=>{
        const { data, incremental, hasNext, extensions, errors } = payload;
        // initial data chunk
        if (!incremental) {
            return {
                data: data || {},
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('errors', errors),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('extensions', extensions),
                hasNext
            };
        }
        // subsequent data chunks
        const incrementalArray = incremental.map(({ data, path, errors })=>{
            return {
                data: data && path ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildDataObjectByPath"])(path, data) : {},
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('errors', errors)
            };
        });
        return {
            data: incrementalArray.length === 1 ? incrementalArray[0].data : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCombinedDataObject"])([
                ...incrementalArray.map(({ data })=>data)
            ]),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('errors', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineErrors"])(incrementalArray)),
            hasNext
        };
    });
}
function validateResponseData(responseErrors, combinedData) {
    if (responseErrors.length > 0) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GQL_API_ERROR"], {
            cause: {
                graphQLErrors: responseErrors
            }
        });
    }
    if (Object.keys(combinedData).length === 0) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NO_DATA_OR_ERRORS_ERROR"]);
    }
}
function createMultipartResponseAsyncInterator(response, responseContentType) {
    const boundaryHeader = (responseContentType ?? '').match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BOUNDARY_HEADER_REGEX"]);
    const boundary = `--${boundaryHeader ? boundaryHeader[1] : '-'}`;
    if (!response.body?.getReader && !response.body[Symbol.asyncIterator]) {
        throw new Error('API multipart response did not return an iterable body', {
            cause: response
        });
    }
    const streamBodyIterator = getStreamBodyIterator(response);
    let combinedData = {};
    let responseExtensions;
    return {
        async *[Symbol.asyncIterator] () {
            try {
                let streamHasNext = true;
                for await (const chunkBodies of readStreamChunk(streamBodyIterator, boundary)){
                    const responseData = getResponseDataFromChunkBodies(chunkBodies);
                    responseExtensions = responseData.find((datum)=>datum.extensions)?.extensions ?? responseExtensions;
                    const responseErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineErrors"])(responseData);
                    combinedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCombinedDataObject"])([
                        combinedData,
                        ...responseData.map(({ data })=>data)
                    ]);
                    streamHasNext = responseData.slice(-1)[0].hasNext;
                    validateResponseData(responseErrors, combinedData);
                    yield {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('data', combinedData),
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('extensions', responseExtensions),
                        hasNext: streamHasNext
                    };
                }
                if (streamHasNext) {
                    throw new Error(`Response stream terminated unexpectedly`);
                }
            } catch (error) {
                const cause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorCause"])(error);
                yield {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('data', combinedData),
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('extensions', responseExtensions),
                    errors: {
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrorMessage"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(error)),
                        networkStatusCode: response.status,
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('graphQLErrors', cause?.graphQLErrors),
                        response
                    },
                    hasNext: false
                };
            }
        }
    };
}
function generateRequestStream(fetchFn) {
    return async (...props)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFER_OPERATION_REGEX"].test(props[0])) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrorMessage"])('This operation does not result in a streamable response - use request() instead.'));
        }
        try {
            const response = await fetchFn(...props);
            const { statusText } = response;
            if (!response.ok) {
                throw new Error(statusText, {
                    cause: response
                });
            }
            const responseContentType = response.headers.get('content-type') || '';
            switch(true){
                case responseContentType.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTENT_TYPES"].json):
                    return createJsonResponseAsyncIterator(response);
                case responseContentType.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTENT_TYPES"].multipart):
                    return createMultipartResponseAsyncInterator(response, responseContentType);
                default:
                    throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UNEXPECTED_CONTENT_TYPE_ERROR"]} ${responseContentType}`, {
                        cause: response
                    });
            }
        } catch (error) {
            return {
                async *[Symbol.asyncIterator] () {
                    const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorCause"])(error);
                    yield {
                        errors: {
                            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrorMessage"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(error)),
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('networkStatusCode', response?.status),
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeyValueIfValid"])('response', response)
                        },
                        hasNext: false
                    };
                }
            };
        }
    };
}
;
 //# sourceMappingURL=graphql-client.mjs.map
}}),
"[project]/node_modules/@shopify/graphql-client/dist/api-client-utilities/validations.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "validateApiVersion": (()=>validateApiVersion),
    "validateDomainAndGetStoreUrl": (()=>validateDomainAndGetStoreUrl)
});
function validateDomainAndGetStoreUrl({ client, storeDomain }) {
    try {
        if (!storeDomain || typeof storeDomain !== 'string') {
            throw new Error();
        }
        const trimmedDomain = storeDomain.trim();
        const protocolUrl = trimmedDomain.match(/^https?:/) ? trimmedDomain : `https://${trimmedDomain}`;
        const url = new URL(protocolUrl);
        url.protocol = 'https';
        return url.origin;
    } catch (error) {
        throw new Error(`${client}: a valid store domain ("${storeDomain}") must be provided`, {
            cause: error
        });
    }
}
function validateApiVersion({ client, currentSupportedApiVersions, apiVersion, logger }) {
    const versionError = `${client}: the provided apiVersion ("${apiVersion}")`;
    const supportedVersion = `Currently supported API versions: ${currentSupportedApiVersions.join(', ')}`;
    if (!apiVersion || typeof apiVersion !== 'string') {
        throw new Error(`${versionError} is invalid. ${supportedVersion}`);
    }
    const trimmedApiVersion = apiVersion.trim();
    if (!currentSupportedApiVersions.includes(trimmedApiVersion)) {
        if (logger) {
            logger({
                type: 'Unsupported_Api_Version',
                content: {
                    apiVersion,
                    supportedApiVersions: currentSupportedApiVersions
                }
            });
        } else {
            console.warn(`${versionError} is likely deprecated or not supported. ${supportedVersion}`);
        }
    }
}
;
 //# sourceMappingURL=validations.mjs.map
}}),
"[project]/node_modules/@shopify/graphql-client/dist/api-client-utilities/api-versions.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getCurrentApiVersion": (()=>getCurrentApiVersion),
    "getCurrentSupportedApiVersions": (()=>getCurrentSupportedApiVersions)
});
function getQuarterMonth(quarter) {
    const month = quarter * 3 - 2;
    return month === 10 ? month : `0${month}`;
}
function getPrevousVersion(year, quarter, nQuarter) {
    const versionQuarter = quarter - nQuarter;
    if (versionQuarter <= 0) {
        return `${year - 1}-${getQuarterMonth(versionQuarter + 4)}`;
    }
    return `${year}-${getQuarterMonth(versionQuarter)}`;
}
function getCurrentApiVersion() {
    const date = new Date();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    const quarter = Math.floor(month / 3 + 1);
    return {
        year,
        quarter,
        version: `${year}-${getQuarterMonth(quarter)}`
    };
}
function getCurrentSupportedApiVersions() {
    const { year, quarter, version: currentVersion } = getCurrentApiVersion();
    const nextVersion = quarter === 4 ? `${year + 1}-01` : `${year}-${getQuarterMonth(quarter + 1)}`;
    return [
        getPrevousVersion(year, quarter, 3),
        getPrevousVersion(year, quarter, 2),
        getPrevousVersion(year, quarter, 1),
        currentVersion,
        nextVersion,
        'unstable'
    ];
}
;
 //# sourceMappingURL=api-versions.mjs.map
}}),
"[project]/node_modules/@shopify/graphql-client/dist/api-client-utilities/utilities.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "generateGetGQLClientParams": (()=>generateGetGQLClientParams),
    "generateGetHeaders": (()=>generateGetHeaders)
});
function generateGetHeaders(config) {
    return (customHeaders)=>{
        return {
            ...customHeaders ?? {},
            ...config.headers
        };
    };
}
function generateGetGQLClientParams({ getHeaders, getApiUrl }) {
    return (operation, options)=>{
        const props = [
            operation
        ];
        if (options && Object.keys(options).length > 0) {
            const { variables, apiVersion: propApiVersion, headers, retries } = options;
            props.push({
                ...variables ? {
                    variables
                } : {},
                ...headers ? {
                    headers: getHeaders(headers)
                } : {},
                ...propApiVersion ? {
                    url: getApiUrl(propApiVersion)
                } : {},
                ...retries ? {
                    retries
                } : {}
            });
        }
        return props;
    };
}
;
 //# sourceMappingURL=utilities.mjs.map
}}),
"[project]/node_modules/@shopify/graphql-client/dist/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@shopify/graphql-client/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$graphql$2d$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/graphql-client.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/utilities.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$validations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/api-client-utilities/validations.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$api$2d$versions$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/api-client-utilities/api-versions.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$http$2d$fetch$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/http-fetch.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/api-client-utilities/utilities.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/index.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@shopify/storefront-api-client/dist/constants.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "CLIENT": (()=>CLIENT),
    "DEFAULT_CLIENT_VERSION": (()=>DEFAULT_CLIENT_VERSION),
    "DEFAULT_CONTENT_TYPE": (()=>DEFAULT_CONTENT_TYPE),
    "DEFAULT_SDK_VARIANT": (()=>DEFAULT_SDK_VARIANT),
    "PRIVATE_ACCESS_TOKEN_HEADER": (()=>PRIVATE_ACCESS_TOKEN_HEADER),
    "PUBLIC_ACCESS_TOKEN_HEADER": (()=>PUBLIC_ACCESS_TOKEN_HEADER),
    "SDK_VARIANT_HEADER": (()=>SDK_VARIANT_HEADER),
    "SDK_VARIANT_SOURCE_HEADER": (()=>SDK_VARIANT_SOURCE_HEADER),
    "SDK_VERSION_HEADER": (()=>SDK_VERSION_HEADER)
});
const DEFAULT_CONTENT_TYPE = 'application/json';
const DEFAULT_SDK_VARIANT = 'storefront-api-client';
// This is value is replaced with package.json version during rollup build process
const DEFAULT_CLIENT_VERSION = '1.0.3';
const PUBLIC_ACCESS_TOKEN_HEADER = 'X-Shopify-Storefront-Access-Token';
const PRIVATE_ACCESS_TOKEN_HEADER = 'Shopify-Storefront-Private-Token';
const SDK_VARIANT_HEADER = 'X-SDK-Variant';
const SDK_VERSION_HEADER = 'X-SDK-Version';
const SDK_VARIANT_SOURCE_HEADER = 'X-SDK-Variant-Source';
const CLIENT = 'Storefront API Client';
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/@shopify/storefront-api-client/dist/validations.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "validatePrivateAccessTokenUsage": (()=>validatePrivateAccessTokenUsage),
    "validateRequiredAccessTokens": (()=>validateRequiredAccessTokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/storefront-api-client/dist/constants.mjs [app-rsc] (ecmascript)");
;
function validatePrivateAccessTokenUsage(privateAccessToken) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
}
function validateRequiredAccessTokens(publicAccessToken, privateAccessToken) {
    if (!publicAccessToken && !privateAccessToken) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLIENT"]}: a public or private access token must be provided`);
    }
    if (publicAccessToken && privateAccessToken) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLIENT"]}: only provide either a public or private access token`);
    }
}
;
 //# sourceMappingURL=validations.mjs.map
}}),
"[project]/node_modules/@shopify/storefront-api-client/dist/storefront-api-client.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createStorefrontApiClient": (()=>createStorefrontApiClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/storefront-api-client/dist/constants.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$validations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/storefront-api-client/dist/validations.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$api$2d$versions$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/api-client-utilities/api-versions.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$validations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/api-client-utilities/validations.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$graphql$2d$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/graphql-client/graphql-client.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/graphql-client/dist/api-client-utilities/utilities.mjs [app-rsc] (ecmascript)");
;
;
;
function createStorefrontApiClient({ storeDomain, apiVersion, publicAccessToken, privateAccessToken, clientName, retries = 0, customFetchApi, logger }) {
    const currentSupportedApiVersions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$api$2d$versions$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentSupportedApiVersions"])();
    const storeUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$validations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateDomainAndGetStoreUrl"])({
        client: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLIENT"],
        storeDomain
    });
    const baseApiVersionValidationParams = {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLIENT"],
        currentSupportedApiVersions,
        logger
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$validations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateApiVersion"])({
        ...baseApiVersionValidationParams,
        apiVersion
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$validations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateRequiredAccessTokens"])(publicAccessToken, privateAccessToken);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$validations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validatePrivateAccessTokenUsage"])(privateAccessToken);
    const apiUrlFormatter = generateApiUrlFormatter(storeUrl, apiVersion, baseApiVersionValidationParams);
    const config = {
        storeDomain: storeUrl,
        apiVersion,
        ...publicAccessToken ? {
            publicAccessToken
        } : {
            privateAccessToken: privateAccessToken
        },
        headers: {
            'Content-Type': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT_TYPE"],
            Accept: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT_TYPE"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SDK_VARIANT_HEADER"]]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SDK_VARIANT"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SDK_VERSION_HEADER"]]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_CLIENT_VERSION"],
            ...clientName ? {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SDK_VARIANT_SOURCE_HEADER"]]: clientName
            } : {},
            ...publicAccessToken ? {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLIC_ACCESS_TOKEN_HEADER"]]: publicAccessToken
            } : {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRIVATE_ACCESS_TOKEN_HEADER"]]: privateAccessToken
            }
        },
        apiUrl: apiUrlFormatter(),
        clientName
    };
    const graphqlClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$graphql$2d$client$2f$graphql$2d$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createGraphQLClient"])({
        headers: config.headers,
        url: config.apiUrl,
        retries,
        customFetchApi,
        logger
    });
    const getHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateGetHeaders"])(config);
    const getApiUrl = generateGetApiUrl(config, apiUrlFormatter);
    const getGQLClientParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$utilities$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateGetGQLClientParams"])({
        getHeaders,
        getApiUrl
    });
    const client = {
        config,
        getHeaders,
        getApiUrl,
        fetch: (...props)=>{
            return graphqlClient.fetch(...getGQLClientParams(...props));
        },
        request: (...props)=>{
            return graphqlClient.request(...getGQLClientParams(...props));
        },
        requestStream: (...props)=>{
            return graphqlClient.requestStream(...getGQLClientParams(...props));
        }
    };
    return Object.freeze(client);
}
function generateApiUrlFormatter(storeUrl, defaultApiVersion, baseApiVersionValidationParams) {
    return (apiVersion)=>{
        if (apiVersion) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$graphql$2d$client$2f$dist$2f$api$2d$client$2d$utilities$2f$validations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateApiVersion"])({
                ...baseApiVersionValidationParams,
                apiVersion
            });
        }
        const urlApiVersion = (apiVersion ?? defaultApiVersion).trim();
        return `${storeUrl}/api/${urlApiVersion}/graphql.json`;
    };
}
function generateGetApiUrl(config, apiUrlFormatter) {
    return (propApiVersion)=>{
        return propApiVersion ? apiUrlFormatter(propApiVersion) : config.apiUrl;
    };
}
;
 //# sourceMappingURL=storefront-api-client.mjs.map
}}),
"[project]/node_modules/@shopify/storefront-api-client/dist/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@shopify/storefront-api-client/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$storefront$2d$api$2d$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/storefront-api-client/dist/storefront-api-client.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@shopify/storefront-api-client/dist/index.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/products/[handle]/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "__next_app__": (()=>__next_app__),
    "pages": (()=>pages),
    "routeModule": (()=>routeModule),
    "tree": (()=>tree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__('[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico [app-rsc] (static)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "products",
            {
                "children": [
                    "[handle]",
                    {
                        "children": [
                            "__PAGE__",
                            {},
                            {
                                metadata: {},
                                "page": [
                                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                                    "[project]/src/app/products/[handle]/page.tsx"
                                ]
                            }
                        ]
                    },
                    {
                        metadata: {}
                    }
                ]
            },
            {
                metadata: {}
            }
        ]
    },
    {
        metadata: {
            icon: [
                async (props)=>[
                        {
                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("//", props.params, "favicon.ico") + `?${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].src.split("/").splice(-1)[0]}`,
                            sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].height}`,
                            type: `image/x-icon`
                        }
                    ]
            ]
        },
        "layout": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/src/app/layout.tsx"
        ],
        "not-found": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/not-found-error.js"
        ]
    }
];
const pages = [
    "[project]/src/app/products/[handle]/page.tsx"
];
;
;
const __next_app_require__ = __turbopack_require__;
const __next_app_load_chunk__ = __turbopack_load__;
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE,
        page: "/products/[handle]/page",
        pathname: "/products/[handle]",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
}); //# sourceMappingURL=app-page.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/products/[handle]/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__('[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico [app-rsc] (static)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/products/[handle]/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/products/[handle]/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetadataBoundary"]),
    "NotFoundBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFoundBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/products/[handle]/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/products/[handle]/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GlobalError"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MetadataBoundary"]),
    "NotFoundBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NotFoundBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/products/[handle]/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$products$2f5b$handle$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/products/[handle]/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/src/app/products/[handle]/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=_277e3a._.js.map