import { AccountSignUp } from "../../types/accountSignUp";
import { Customer } from "../../types/customer";
import { CustomerAccessTokenCreate } from "../../types/customerAccessToken";
import { CustomerAccessTokenDelete } from "../../types/customerAccessTokenDelete";
import { CustomerCreate } from "../../types/customerCreate";
import { createCustomerServiceInstance } from "./customerImpl";

export interface CustomerService {
    createAccessToken: (email: string, password: string) => Promise<CustomerAccessTokenCreate | undefined>;
    deleteAccessToken: (customerAccessToken: string) => Promise<CustomerAccessTokenDelete | undefined>;
    createCustomer: (account: AccountSignUp) => Promise<CustomerCreate>;
    updateCustomerCart: (customerID: string, cartID: string) => Promise<any>;
    getCustomer: (customerAccessToken: string) => Promise<Customer | null>;
}

const customerService: CustomerService = createCustomerServiceInstance();
export default customerService;
