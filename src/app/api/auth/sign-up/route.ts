import cartService from "@/app/services/server/cart";
import customerService from "@/app/services/server/customer";
import { CartCreate } from "@/app/types/cart";
import { CustomerCreate } from "@/app/types/customerCreate";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { email, password, phone } = await request.json();

    const customerEntity: CustomerCreate | undefined = await customerService.createCustomer({ email, password, phone });

    if (customerEntity.customer) {
        const { id: customerID, email: customerEmail } = customerEntity.customer;

        const cartEntity: CartCreate | undefined = await cartService.createCart(customerEmail);

        if (cartEntity?.cart) {
            const cartID: string = cartEntity.cart.id;
            await customerService.updateCustomerCart(customerID, cartID);
        }
    }

    return NextResponse.json(customerEntity);
}
