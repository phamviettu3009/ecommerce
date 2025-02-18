import customerService from "@/app/services/server/customer";
import { CustomerAccessTokenCreate } from "@/app/types/customerAccessToken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    const response: CustomerAccessTokenCreate | undefined = await customerService.createAccessToken(email, password);
    const accessToken: string | undefined | null = response?.customerAccessToken?.accessToken;
    const expiresAt: string | undefined | null = response?.customerAccessToken?.expiresAt;

    if (accessToken && expiresAt) {
        const currentTime = new Date();
        const expiresTimestamp: Date = new Date(expiresAt);
        const timeDifference: number = expiresTimestamp.getTime() - currentTime.getTime();

        const res = NextResponse.json({
            message: "Login successful!",
            description: "Correct email and password",
            authed: true,
        });

        res.cookies.set("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: timeDifference / 1000,
        });

        return res;
    }

    return NextResponse.json({
        message: "signing failure!",
        description: "Incorrect email or password",
        authed: false,
    });
}
