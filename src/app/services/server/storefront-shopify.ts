import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const storeFrontShopify = createStorefrontApiClient({
    storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN!,
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION!,
    publicAccessToken: process.env.NEXT_PUBLIC_STORE_API_TOKEN!,
});

export default storeFrontShopify;
