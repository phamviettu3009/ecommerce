import { createAdminApiClient } from "@shopify/admin-api-client";

const adminShopify = createAdminApiClient({
    storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN!,
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION!,
    accessToken: process.env.NEXT_PUBLIC_ADMIN_API_TOKEN!,
});

export default adminShopify;
