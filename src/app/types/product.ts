import Images from "./image";
import VariantPrice from "./variantPrice";

export default interface Product {
    id: string;
    handle: string;
    title: string;
    images: Images;
    priceRange: {
        maxVariantPrice: VariantPrice;
        minVariantPrice: VariantPrice;
    };
}
