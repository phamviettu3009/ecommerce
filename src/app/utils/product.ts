import ProductDetail from "../types/productDetail";
import ProductVariant from "../types/productVariant";

export function isDefaultProduct(variants: ProductVariant[]): boolean {
    if (variants.length === 1 && variants[0].title === "Default Title") {
        return true;
    }

    return false;
}

export function getFullProductVariantID(value: string): string {
    return "gid://shopify/ProductVariant/" + value;
}

export function extractProductVariantID(value: string): string {
    return value.replace("gid://shopify/ProductVariant/", "");
}

export function getVariantByID(product: ProductDetail, variantID: string): ProductVariant | undefined {
    const id = "gid://shopify/ProductVariant/" + extractProductVariantID(variantID);
    return product.variants.nodes.find((variant: ProductVariant) => variant.id === id);
}
