(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_c39bb9._.js", {

"[project]/src/app/products/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "load_more": "styles-module-scss-module__hn9RMq__load_more",
  "load_more_button": "styles-module-scss-module__hn9RMq__load_more_button",
  "page": "styles-module-scss-module__hn9RMq__page",
  "page_container": "styles-module-scss-module__hn9RMq__page_container",
});
}}),
"[project]/src/app/constants/common.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Filter/FilterItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/constants/common.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormGroup$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormGroup$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/FormGroup/FormGroup.js [app-client] (ecmascript) <export default as FormGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/FormControlLabel/FormControlLabel.js [app-client] (ecmascript) <export default as FormControlLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Checkbox/Checkbox.js [app-client] (ecmascript) <export default as Checkbox>");
;
;
;
function FilterItem({ productFilter, onClickFilterValue, filterSelected }) {
    if (productFilter.type == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductFilterType"].PRICE_RANGE) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                children: productFilter.label
            }, void 0, false, {
                fileName: "[project]/src/app/components/Filter/FilterItem.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormGroup$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormGroup$3e$__["FormGroup"], {
                children: productFilter.values.map(({ id, label, input })=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                        control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                            checked: filterSelected[input] ?? false
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Filter/FilterItem.tsx",
                            lineNumber: 23,
                            columnNumber: 38
                        }, void 0),
                        label: label,
                        onChange: (_, value)=>{
                            onClickFilterValue(input, value);
                        }
                    }, id, false, {
                        fileName: "[project]/src/app/components/Filter/FilterItem.tsx",
                        lineNumber: 21,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/Filter/FilterItem.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Filter/FilterItem.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_c = FilterItem;
const __TURBOPACK__default__export__ = FilterItem;
var _c;
__turbopack_refresh__.register(_c, "FilterItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Filter/FilterPrice.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/constants/common.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Slider$2f$Slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Slider/Slider.js [app-client] (ecmascript) <export default as Slider>");
;
;
;
function FilterPrice({ priceFilter, onChangeFilterRangePrice, rangePrice }) {
    if (priceFilter.type == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductFilterType"].PRICE_RANGE) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    children: priceFilter.label
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Filter/FilterPrice.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this),
                priceFilter.values.map((value)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: value.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Filter/FilterPrice.tsx",
                                lineNumber: 20,
                                columnNumber: 29
                            }, this),
                            value.id == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueFilterType"].FILTER_PRICE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Slider$2f$Slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__["Slider"], {
                                onChange: (_, value)=>{
                                    onChangeFilterRangePrice(value);
                                },
                                value: rangePrice.filter,
                                min: rangePrice.range[0],
                                max: rangePrice.range[1],
                                "aria-label": "Default",
                                valueLabelDisplay: "auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Filter/FilterPrice.tsx",
                                lineNumber: 22,
                                columnNumber: 33
                            }, this)
                        ]
                    }, value.id, true, {
                        fileName: "[project]/src/app/components/Filter/FilterPrice.tsx",
                        lineNumber: 19,
                        columnNumber: 25
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Filter/FilterPrice.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this);
    }
    return null;
}
_c = FilterPrice;
const __TURBOPACK__default__export__ = FilterPrice;
var _c;
__turbopack_refresh__.register(_c, "FilterPrice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/utils/filter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/services/storefront.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@shopify/storefront-api-client/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$storefront$2d$api$2d$client$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@shopify/storefront-api-client/dist/storefront-api-client.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$storefront$2d$api$2d$client$2f$dist$2f$storefront$2d$api$2d$client$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStorefrontApiClient"])({
    storeDomain: ("TURBOPACK compile-time value", "https://t3qihh-pt.myshopify.com"),
    apiVersion: ("TURBOPACK compile-time value", "unstable"),
    publicAccessToken: ("TURBOPACK compile-time value", "15eb9c8445336761803a7a4e899be38a")
});
const __TURBOPACK__default__export__ = client;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/services/productImpl.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createProductServiceInstance": (()=>createProductServiceInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/constants/common.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/filter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/storefront.ts [app-client] (ecmascript)");
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fetch(query);
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fetch(query, {
            variables: variables
        });
        const { data } = await response.json();
        const result = data?.product;
        return result;
    }
    async getProducts(cursor, keyword, productFilter, sort) {
        const filters = productFilter["filter"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertObjectToArrayFilter"])(productFilter["filter"]) : [];
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
            first: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIZE_PER_PAGE"],
            after: cursor,
            filter: filters,
            sortKey: sort
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fetch(query, {
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$storefront$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fetch(query, {
            variables: variables
        });
        const { data } = await response.json();
        const result = data?.search.productFilters;
        return result ?? [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/services/product.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$productImpl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/productImpl.ts [app-client] (ecmascript)");
;
const productService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$productImpl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProductServiceInstance"])();
const __TURBOPACK__default__export__ = productService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useDebounce.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useDebounce": (()=>useDebounce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useDebounce = (callback, delay)=>{
    _s();
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debouncedFunction = (...args)=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(()=>{
            callback(...args);
        }, delay);
    };
    return debouncedFunction;
};
_s(useDebounce, "gfrBEJvCgsjNvOrjn3gdNIvpgBw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useFilter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/product.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/filter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/hooks/useDebounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/constants/common.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
function useFilter() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [productFilters, setProductFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterSelected, setFilterSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [priceFilter, setPriceFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rangePrice, setRangePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        range: [],
        filter: []
    });
    const searchKeyword = searchParams.get("search") ?? "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFilter.useEffect": ()=>{
            getProductFilters();
            extractSelectedFiltersFromURL();
        }
    }["useFilter.useEffect"], [
        searchKeyword
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFilter.useEffect": ()=>{
            extractSelectedFiltersFromURL();
            extractFilterPrice(productFilters);
        }
    }["useFilter.useEffect"], [
        searchParams
    ]);
    const getProductFilters = async ()=>{
        const productFilters = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getProductFilters(searchKeyword);
        const productFilterReplaced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceInputFilter"])(productFilters);
        const productFilterWithoutTags = productFilterReplaced.filter((item)=>item.id !== "filter.p.tag");
        const filterTags = extractFilterTags(productFilterReplaced);
        setProductFilters([
            ...productFilterWithoutTags,
            ...filterTags
        ]);
        extractFilterPrice(productFilterWithoutTags);
    };
    const extractFilterTags = (productFilters)=>{
        const filterTags = productFilters.find((item)=>item.id === "filter.p.tag");
        if (filterTags) {
            const convert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertFilterTagData"])(filterTags.values);
            return convert;
        }
        return [];
    };
    const extractFilterPrice = (productFilters)=>{
        const record = productFilters.find((item)=>item.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductFilterType"].PRICE_RANGE);
        if (record) {
            const { price: { min, max } } = JSON.parse(record.values[0].input);
            const minParams = Number(searchParams.get("filter.price.min") ?? NaN);
            const maxParams = Number(searchParams.get("filter.price.max") ?? NaN);
            setPriceFilter(record);
            if (Number.isNaN(minParams) || Number.isNaN(maxParams)) {
                setRangePrice({
                    range: [
                        min,
                        max
                    ],
                    filter: [
                        min,
                        max
                    ]
                });
            } else {
                setRangePrice({
                    range: [
                        min,
                        max
                    ],
                    filter: [
                        minParams,
                        maxParams
                    ]
                });
            }
        }
    };
    const extractSelectedFiltersFromURL = ()=>{
        const filterParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFilterParams"])(searchParams.toString());
        const filterObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryStringToObject"])(filterParams);
        if (filterObj["filter"]) {
            const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertObjectToArrayFilter"])(filterObj["filter"]);
            const filterSelectedHashMap = filters.reduce((target, value)=>{
                target[JSON.stringify(value)] = true;
                return target;
            }, {});
            setFilterSelected(filterSelectedHashMap);
        } else {
            setFilterSelected({});
        }
    };
    const onFilter = (input, checked)=>{
        setFilterSelected((selected)=>({
                ...selected,
                [input]: checked
            }));
        updateURLParams(input, checked);
    };
    const updateURLParams = (input, checked)=>{
        const currentParams = new URLSearchParams(window.location.search);
        const filterString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToQueryString"])(JSON.parse(input));
        const params = filterString.split("&");
        params.forEach((param)=>{
            const [key, valueFilter] = param.split("=");
            const valueByKey = currentParams.get(key);
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
                const newValue = valueByKey.replace(valueFilter + ",", "");
                if (newValue === "") {
                    currentParams.delete(key, valueFilter + ",");
                } else {
                    currentParams.set(key, newValue);
                }
            }
        });
        router.push(`${window.location.pathname}?${currentParams.toString()}`);
    };
    const onDebouncedPriceRangeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])({
        "useFilter.useDebounce[onDebouncedPriceRangeChange]": (rangePrice)=>{
            const input = `{ "price": { "min": ${rangePrice[0]}, "max": ${rangePrice[1]} } }`;
            updateURLParams(input);
        }
    }["useFilter.useDebounce[onDebouncedPriceRangeChange]"], 1000);
    const onChangeFilterRangePrice = (rangePrice)=>{
        setRangePrice((prev)=>({
                ...prev,
                filter: rangePrice
            }));
        onDebouncedPriceRangeChange(rangePrice);
    };
    return {
        productFilters,
        onFilter,
        onChangeFilterRangePrice,
        filterSelected,
        priceFilter,
        rangePrice
    };
}
_s(useFilter, "HGRCGUZSpsi4zJcl/pZmvd59CzQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
    ];
});
const __TURBOPACK__default__export__ = useFilter;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Filter/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Filter$2f$FilterItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Filter/FilterItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Filter$2f$FilterPrice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Filter/FilterPrice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/hooks/useFilter.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function Filter() {
    _s();
    const { productFilters, onFilter, filterSelected, priceFilter, onChangeFilterRangePrice, rangePrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "filter",
        children: [
            productFilters.map((filter)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Filter$2f$FilterItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    productFilter: filter,
                    onClickFilterValue: onFilter,
                    filterSelected: filterSelected
                }, filter.id, false, {
                    fileName: "[project]/src/app/components/Filter/index.tsx",
                    lineNumber: 14,
                    columnNumber: 21
                }, this);
            }),
            priceFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Filter$2f$FilterPrice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                priceFilter: priceFilter,
                onChangeFilterRangePrice: onChangeFilterRangePrice,
                rangePrice: rangePrice
            }, void 0, false, {
                fileName: "[project]/src/app/components/Filter/index.tsx",
                lineNumber: 24,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Filter/index.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_s(Filter, "LCZgi6bqr0HzqQLbDJdis37k0t4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Filter;
const __TURBOPACK__default__export__ = Filter;
var _c;
__turbopack_refresh__.register(_c, "Filter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/assets/empty-image.png [app-client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/empty-image.d0023a9d.png");}}),
"[project]/src/app/assets/empty-image.png.mjs { IMAGE => \"[project]/src/app/assets/empty-image.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/assets/empty-image.png [app-client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 300,
    height: 300,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAhklEQVR42i2OywrFIBBD5///ra29be0DXSi4UBRx4f4ebAd0kkkIkWmalmVZ1/U3BgCd51lYcK31fd/P85znuW2bUkqwQJxzMcacM+C6LjThWWtrra01fjRjzL7vQg4JpRSuvXfAJxB3HIf3nqiUUgiBZNxCATQC9Ri8bzGhLhpIjXm7cvwDm8CijpjulycAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/ProductCard/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/assets/empty-image.png.mjs { IMAGE => "[project]/src/app/assets/empty-image.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
;
;
;
;
function ProductCard({ product, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...rest,
        className: "prod-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "prod-card__img",
                alt: "",
                src: product.images.nodes[0]?.src || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$empty$2d$image$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                width: 200,
                height: 200
            }, void 0, false, {
                fileName: "[project]/src/app/components/ProductCard/index.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prod-card-bottom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "prod-card-bottom__title",
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ProductCard/index.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "prod-card-bottom__price",
                        children: [
                            product.priceRange.maxVariantPrice.amount,
                            " ",
                            product.priceRange.maxVariantPrice.currencyCode
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ProductCard/index.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ProductCard/index.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ProductCard/index.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c;
__turbopack_refresh__.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/ProductContainer/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProductCard$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/ProductCard/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
;
;
;
;
function ProductContainer({ products, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ...rest,
        className: `product-container ${rest.className ?? ""}`,
        children: products.map((product)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `products/${product.handle}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProductCard$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    product: product
                }, product.id, false, {
                    fileName: "[project]/src/app/components/ProductContainer/index.tsx",
                    lineNumber: 17,
                    columnNumber: 25
                }, this)
            }, product.id, false, {
                fileName: "[project]/src/app/components/ProductContainer/index.tsx",
                lineNumber: 16,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/components/ProductContainer/index.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = ProductContainer;
const __TURBOPACK__default__export__ = ProductContainer;
var _c;
__turbopack_refresh__.register(_c, "ProductContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useProducts.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/product.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/filter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$client$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/client/product.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function useProducts() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasLoadAll, setHasLoadAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pageInfo, setPageInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchKeyword = searchParams.get("search") ?? "";
    const queryParams = searchParams.toString();
    let cursor = pageInfo?.endCursor ?? null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProducts.useEffect": ()=>{
            clearData();
            getProducts();
        }
    }["useProducts.useEffect"], [
        queryParams
    ]);
    const getProducts = async ()=>{
        setIsLoading(true);
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$client$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productService"];
        const filterParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFilterParams"])(searchParams.toString());
        const filterVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryStringToObject"])(filterParams);
        const sortParams = searchParams.get("sort");
        const transformFilterVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformObject"])(filterVariables, {
            asNumbers: [
                "filter.price.min",
                "filter.price.max"
            ]
        });
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getProducts(cursor, searchKeyword, transformFilterVariables, sortParams);
        if (response) {
            setProducts((prev)=>[
                    ...prev,
                    ...response.nodes
                ]);
            setPageInfo(response.pageInfo);
            setHasLoadAll(!response.pageInfo.hasNextPage);
        }
        setIsLoading(false);
    };
    const clearData = ()=>{
        cursor = null;
        setPageInfo(null);
        setProducts([]);
        setHasLoadAll(false);
    };
    return {
        products,
        getProducts,
        hasLoadAll,
        isLoading
    };
}
_s(useProducts, "lFbB0vAW3FrQEkBySqfZLtwFswE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
const __TURBOPACK__default__export__ = useProducts;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Sort/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/constants/common.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/FormControl/FormControl.js [app-client] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
function Sort() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const currentParams = new URLSearchParams(window.location.search);
    const sortOptions = [
        {
            name: "Chọn",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortProduct"].SELECT_OPTIONS
        },
        {
            name: "Giá",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortProduct"].PRICE
        },
        {
            name: "Sản phẩm liên quan",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortProduct"].RELEVANCE
        }
    ];
    const [sortSelected, setSortSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortProduct"].SELECT_OPTIONS);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sort.useEffect": ()=>{
            extractSortFromURL();
        }
    }["Sort.useEffect"], []);
    const extractSortFromURL = ()=>{
        const sortParams = searchParams.get("sort");
        const sortProduct = sortParams;
        if (Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortProduct"]).includes(sortProduct)) {
            setSortSelected(sortProduct);
        } else {
            setSortSelected(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortProduct"].SELECT_OPTIONS);
            currentParams.delete("sort", sortProduct);
            router.push(`${window.location.pathname}?${currentParams.toString()}`);
        }
    };
    const onSortHandler = (options)=>{
        const value = options.target.value;
        setSortSelected(value);
        if (value === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortProduct"].SELECT_OPTIONS) {
            const preSortParams = currentParams.get("sort");
            currentParams.delete("sort", preSortParams ?? "");
        } else {
            currentParams.set("sort", value);
        }
        router.push(`${window.location.pathname}?${currentParams.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "sort mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                children: "Sort"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sort/index.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                className: "m-0 p-0",
                size: "small",
                sx: {
                    m: 1,
                    minWidth: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                    inputProps: {
                        MenuProps: {
                            disableScrollLock: true
                        }
                    },
                    value: sortSelected,
                    onChange: onSortHandler,
                    children: sortOptions.map(({ name, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            value: value,
                            children: name
                        }, value, false, {
                            fileName: "[project]/src/app/components/Sort/index.tsx",
                            lineNumber: 61,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Sort/index.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sort/index.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Sort/index.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(Sort, "OKb/H+BiUlRv++p8SORDUJruMu4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Sort;
const __TURBOPACK__default__export__ = Sort;
var _c;
__turbopack_refresh__.register(_c, "Sort");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/products/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Filter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Filter/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProductContainer$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/ProductContainer/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sort$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Sort/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript) <export default as Button>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function ProductsPage() {
    _s();
    const { products, hasLoadAll, isLoading, getProducts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-fluid ps-0 pe-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sort$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Filter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 20,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProductContainer$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "mb-3",
                                products: products
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this),
                            !hasLoadAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].load_more,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].load_more_button,
                                    disabled: isLoading,
                                    color: "primary",
                                    variant: "outlined",
                                    size: "medium",
                                    onClick: getProducts,
                                    children: "Tải thêm"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 25,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 17,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_s(ProductsPage, "mfNo7DW18HJCXJ/cvTnFK4SSYgg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ProductsPage;
const __TURBOPACK__default__export__ = ProductsPage;
var _c;
__turbopack_refresh__.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_c39bb9._.js.map