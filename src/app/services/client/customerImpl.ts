import { AccountSignUp } from "@/app/types/accountSignUp";
import { CustomerCreate } from "@/app/types/customerCreate";
import { CustomerService } from "./customer";
import { AxiosResponse } from "axios";
import axiosClient from "./axios";

export function createCustomerServiceInstance(): CustomerService {
    return new CustomerServiceImpl();
}

class CustomerServiceImpl implements CustomerService {
    async createCustomer(account: AccountSignUp): Promise<CustomerCreate | undefined> {
        try {
            const response: AxiosResponse<CustomerCreate, any> = await axiosClient.post("/auth/sign-up", account);
            return response.data;
        } catch (error) {
            throw new Error("Create customer error " + error);
        }
    }
}
