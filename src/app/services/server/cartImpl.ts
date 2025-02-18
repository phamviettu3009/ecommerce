import { CartCreate } from "@/app/types/cart";
import { CartService } from "./cart";
import storeFrontShopify from "./storefront-shopify";

export function createCartServiceInstance(): CartService {
    return new CartServiceImpl();
}

class CartServiceImpl implements CartService {
    async createCart(buyerEmail: string): Promise<CartCreate | undefined> {
        const CREATE_CART = `
            mutation CartCreate($email: String!) {
                cartCreate(input: { buyerIdentity: { email: $email } }) {
                    cart {
                        checkoutUrl
                        createdAt
                        id
                        note
                        totalQuantity
                        updatedAt
                    }
                }
            }
        `;

        const response = await storeFrontShopify.request(CREATE_CART, { variables: { email: buyerEmail } });
        return response.data?.cartCreate;
    }

    async getCart(cartID: string): Promise<any | null> {
        const GET_CART = `
            query Cart($cartID: ID!) {
                cart(id: $cartID) {
                    checkoutUrl
                    createdAt
                    id
                    note
                    totalQuantity
                    updatedAt
                    lines(first: 100) {
                        nodes {
                            id
                            merchandise {
                                ... on ProductVariant {
                                    availableForSale
                                    barcode
                                    currentlyNotInStock
                                    id
                                    quantityAvailable
                                    requiresComponents
                                    requiresShipping
                                    sku
                                    taxable
                                    title
                                    weight
                                    weightUnit
                                }
                            }
                            quantity
                        }
                    }
                }
            }
        `;

        const response = await storeFrontShopify.fetch(GET_CART, { variables: { cartID } });
        const { data } = await response.json();
        return data?.cart;
    }
}
