import { CartCreate } from "@/app/types/cart";
import { createCartServiceInstance } from "./cartImpl";

export interface CartService {
    createCart: (buyerEmail: string) => Promise<CartCreate | undefined>;
    getCart: (cartID: string) => Promise<any | null>;
}

const cartService: CartService = createCartServiceInstance();
export default cartService;
