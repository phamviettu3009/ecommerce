import VariantPrice from "./variantPrice";

export default interface ProductVariant {
    id: string;
    title: string;
    price: VariantPrice;
    image: {
        src: string;
    } | null;
}
