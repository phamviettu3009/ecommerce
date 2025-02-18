import { UserError } from "./userError";

export interface CustomerAccessTokenDelete {
    deletedAccessToken: string;
    deletedCustomerAccessTokenId: string;
    userErrors: UserError[];
}
