import React from "react";
import Sidebar from "./Sidebar";
import { Customer } from "../types/customer";
import customerService from "../services/server/customer";
import { redirect } from "next/navigation";
import { getAccessToken } from "../utils/cookies";

async function CustomerPage() {
    const accessToken: string | null = (await getAccessToken()) ?? "";
    const customer: Customer | null = await customerService.getCustomer(accessToken);

    if (customer === null) {
        redirect("/auth/sign-in");
    }

    return (
        <div>
            <div>{customer?.displayName}</div>
            <Sidebar />
        </div>
    );
}

export default CustomerPage;
