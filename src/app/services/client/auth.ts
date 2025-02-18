import Account from "@/app/types/account";
import { createAuthServiceInstance } from "./authImpl";
import SignInResponse from "@/app/types/signInResponse";
import { SignOutResponse } from "@/app/types/signOutResponse";

export interface AuthService {
    signIn(account: Account): Promise<SignInResponse>;
    signOut(): Promise<SignOutResponse>;
}

const authService: AuthService = createAuthServiceInstance();
export default authService;
