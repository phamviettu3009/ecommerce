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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/assets/empty-image.png.mjs { IMAGE => "[project]/src/app/assets/empty-image.png [app-rsc] (static)" } [app-rsc] (structured image object, ecmascript)');
;
;
;
;
;
;
function QuantityControl({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$css$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classes"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f5b$handle$5d2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"], "card-view"),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDefaultProduct"])(product.variants.nodes) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: productImage || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                alt: "",
                width: 50,
                height: 50
            }, void 0, false, {
                fileName: "[project]/src/app/products/[handle]/QuantityControl.tsx",
                lineNumber: 20,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/products/[handle]/QuantityControl.tsx",
            lineNumber: 19,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/src/app/products/[handle]/QuantityControl.tsx",
            lineNumber: 23,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/products/[handle]/QuantityControl.tsx",
        lineNumber: 17,
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

};

//# sourceMappingURL=_65d78e._.js.map