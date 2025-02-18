import { useSession, signIn, signOut } from "next-auth/react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Account from "../types/account";
import authService from "../services/client/auth";
import SignInResponse from "../types/signInResponse";
import { useRouter } from "next/navigation";
import { SignOutResponse } from "../types/signOutResponse";
import { AccountSignUp } from "../types/accountSignUp";
import customerService from "../services/client/customer";
import { CustomerCreate } from "../types/customerCreate";

function useAuth() {
    const { data: session } = useSession();
    const route = useRouter();
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { control: signInControl, handleSubmit: signInSubmit } = useForm<Account>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { control: signUpControl, handleSubmit: signUpSubmit } = useForm<AccountSignUp>({
        defaultValues: {
            email: "",
            password: "",
            phone: "",
        },
    });

    const _handleSignIn = async (account: Account) => {
        setIsLoading(true);
        setMessage(null);
        const signIn: SignInResponse = await authService.signIn(account);
        if (signIn.authed) {
            route.push("/customer");
            route.refresh();
        } else {
            setMessage(signIn.description);
        }
        setIsLoading(false);
    };

    const handleSignIn = signInSubmit(_handleSignIn);

    const handleSignUp = signUpSubmit(async (account: AccountSignUp): Promise<void> => {
        setIsLoading(true);
        setMessage(null);
        const customer: CustomerCreate | undefined = await customerService.createCustomer(account);

        if (customer && customer.customerUserErrors) {
            const messageError: string = customer.customerUserErrors.map((error) => error.message).join(", ");
            setMessage(messageError);
        }

        if (customer && customer.customer) {
            _handleSignIn({ email: account.email, password: account.password });
        }

        setIsLoading(false);
    });

    const handleSignOut = async () => {
        const signOut: SignOutResponse = await authService.signOut();
        if (signOut.signOut) {
            route.push("/auth/sign-in");
            route.refresh();
        }
    };

    return {
        session,
        message,
        signInControl,
        handleSignIn,
        handleSignOut,
        signIn,
        signOut,
        isLoading,
        signUpControl,
        handleSignUp,
    };
}

export default useAuth;
