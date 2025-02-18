import Account from "@/app/types/account";
import { AuthService } from "./auth";
import SignInResponse from "@/app/types/signInResponse";
import { SignOutResponse } from "@/app/types/signOutResponse";
import axiosClient from "./axios";
import { AxiosResponse } from "axios";

export function createAuthServiceInstance(): AuthService {
    return new AuthServiceImpl();
}

class AuthServiceImpl implements AuthService {
    async signIn(account: Account): Promise<SignInResponse> {
        try {
            const response: AxiosResponse<SignInResponse, any> = await axiosClient.post("/auth/sign-in", account);
            return response.data;
        } catch (error) {
            throw new Error("Sign In failed " + error);
        }
    }

    async signOut(): Promise<SignOutResponse> {
        try {
            const response: AxiosResponse<SignOutResponse, any> = await axiosClient.post("/auth/sign-out");
            return response.data;
        } catch (error) {
            throw new Error("Sign out failed " + error);
        }
    }
}
