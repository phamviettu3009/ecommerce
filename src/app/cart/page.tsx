import React from "react";
import cartService from "../services/server/cart";
import { Customer } from "../types/customer";
import customerService from "../services/server/customer";
import { getAccessToken } from "../utils/cookies";

async function CartPage() {
    const accessToken: string | null = (await getAccessToken()) ?? "";
    const customer: Customer | null = await customerService.getCustomer(accessToken);
    const cartID: string | null = customer?.tags[0];

    if (cartID === null) {
        return <div>cart not found!</div>;
    }

    const cart: any = await cartService.getCart(cartID);

    if (customer === undefined) {
        return <div>customer not found!</div>;
    }

    return (
        <div>
            CartPage
            <div>{customer?.displayName}</div>
            <div>{cartID}</div>
            <div>{JSON.stringify(cart)}</div>
        </div>
    );
}

export default CartPage;
