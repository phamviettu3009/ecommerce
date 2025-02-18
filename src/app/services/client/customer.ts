import { AccountSignUp } from "@/app/types/accountSignUp";
import { CustomerCreate } from "@/app/types/customerCreate";
import { createCustomerServiceInstance } from "./customerImpl";

export interface CustomerService {
    createCustomer: (account: AccountSignUp) => Promise<CustomerCreate | undefined>;
}

const customerService: CustomerService = createCustomerServiceInstance();
export default customerService;
