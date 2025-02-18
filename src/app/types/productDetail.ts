import Images from "./image";
import ProductOption from "./productOption";
import ProductVariant from "./productVariant";
import VariantPrice from "./variantPrice";

export default interface ProductDetail {
    id: string;
    handle: string;
    title: string;
    description: string;
    descriptionHtml: string;
    images: Images;
    priceRange: {
        maxVariantPrice: VariantPrice;
        minVariantPrice: VariantPrice;
    };
    options: ProductOption[];
    variants: {
        nodes: ProductVariant[];
    };
}


