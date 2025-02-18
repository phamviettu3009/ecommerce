import { AccountSignUp } from "../../types/accountSignUp";
import { Customer } from "../../types/customer";
import { CustomerAccessTokenCreate } from "../../types/customerAccessToken";
import { CustomerAccessTokenDelete } from "../../types/customerAccessTokenDelete";
import { CustomerCreate } from "../../types/customerCreate";
import { CustomerService } from "./customer";
import storeFrontShopify from "./storefront-shopify";
import adminShopify from "./admin-shopify";

export function createCustomerServiceInstance(): CustomerService {
    return new CustomerServiceImpl();
}

class CustomerServiceImpl implements CustomerService {
    async createAccessToken(email: string, password: string): Promise<CustomerAccessTokenCreate | undefined> {
        const CUSTOMER_ACCESS_TOKEN_CREATE = `
            mutation CustomerAccessTokenCreate($email: String!, $password: String!) {
                customerAccessTokenCreate(
                    input: { email: $email, password: $password }
                ) {
                    customerAccessToken {
                        accessToken
                        expiresAt
                    }
                    customerUserErrors {
                        code
                        field
                        message
                    }
                    userErrors {
                        field
                        message
                    }
                }
            }
        `;

        const response = await storeFrontShopify.request(CUSTOMER_ACCESS_TOKEN_CREATE, {
            variables: { email, password },
        });

        return response?.data?.customerAccessTokenCreate;
    }

    async deleteAccessToken(customerAccessToken: string): Promise<CustomerAccessTokenDelete | undefined> {
        const CUSTOMER_ACCESS_TOKEN_DELETE = `
            mutation CustomerAccessTokenDelete($customerAccessToken: String!) {
                customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
                    deletedAccessToken
                    deletedCustomerAccessTokenId
                    userErrors {
                        field
                        message
                    }
                }
            }
        `;

        const response = await storeFrontShopify.request(CUSTOMER_ACCESS_TOKEN_DELETE, {
            variables: { customerAccessToken: customerAccessToken },
        });

        return response?.data?.customerAccessTokenDelete;
    }

    async createCustomer(account: AccountSignUp): Promise<CustomerCreate> {
        const CREATE_CUSTOMER = `
            mutation CustomerCreate($email: String!, $password: String!, $phone: String!) {
                customerCreate(
                    input: { email: $email, password: $password, phone: $phone }
                ) {
                    customer {
                        acceptsMarketing
                        createdAt
                        displayName
                        email
                        firstName
                        id
                        lastName
                        numberOfOrders
                        phone
                        tags
                        updatedAt
                    }
                    customerUserErrors {
                        code
                        field
                        message
                    }
                    userErrors {
                        field
                        message
                    }
                }
            }
        `;

        const response = await storeFrontShopify.request(CREATE_CUSTOMER, {
            variables: { email: account.email, password: account.password, phone: account.phone },
        });

        return response?.data?.customerCreate;
    }

    async updateCustomerCart(customerID: string, cartID: string): Promise<any> {
        const UPDATE_CUSTOMER_CART = `
            mutation CustomerUpdate($customerID: ID!, $cartID: String!) {
                customerUpdate(
                    input: { tags: [$cartID], id: $customerID }
                ) {
                    customer {
                        id
                        tags
                    }
                }
            }
        `;

        const response = await adminShopify.request(UPDATE_CUSTOMER_CART, {
            variables: { customerID: customerID, cartID: cartID },
        });

        return response.data;
    }

    async getCustomer(customerAccessToken: string): Promise<Customer | null> {
        const GET_CUSTOMER = `
            query Customer($customerAccessToken: String!) {
                customer(customerAccessToken: $customerAccessToken) {
                    acceptsMarketing
                    createdAt
                    displayName
                    email
                    firstName
                    id
                    lastName
                    numberOfOrders
                    phone
                    tags
                    updatedAt
                }
            }
        `;

        const response = await storeFrontShopify.fetch(GET_CUSTOMER, { variables: { customerAccessToken } });
        const { data } = await response.json();

        return data.customer;
    }
}
