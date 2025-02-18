import { CustomerUserError } from "./customerUserErrors";
import { UserError } from "./userError";

export interface CustomerAccessTokenCreate {
    customerAccessToken: CustomerAccessToken | null;
    customerUserErrors: CustomerUserError[];
    userErrors: UserError[];
}

export interface CustomerAccessToken {
    accessToken: string;
    expiresAt: string;
}
