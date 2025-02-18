import { Customer } from "./customer";
import { CustomerUserError } from "./customerUserErrors";
import { UserError } from "./userError";

export interface CustomerCreate {
    customer: Customer;
    customerUserErrors: CustomerUserError[];
    userErrors: UserError[];
}
