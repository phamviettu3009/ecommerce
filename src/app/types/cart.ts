import { UserError } from "./userError";

export interface CartCreate {
    cart: Cart;
    userErrors: UserError[];
    warnings: {
        code: string;
        message: string;
        target: string;
    }[];
}

export interface Cart {
    checkoutUrl: string;
    createdAt: string;
    id: string;
    note: string;
    totalQuantity: number;
    updatedAt: string;
}
