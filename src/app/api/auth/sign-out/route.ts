import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
import customerService from "@/app/services/server/customer";
import { CustomerAccessTokenDelete } from "@/app/types/customerAccessTokenDelete";

export async function POST(request: NextRequest) {
    const cookies = cookie.parse(request.headers.get("cookie") || "");
    const accessToken: string = cookies.accessToken;

    if (accessToken) {
        const response: CustomerAccessTokenDelete | undefined = await customerService.deleteAccessToken(accessToken);

        if (response?.deletedAccessToken) {
            const res = NextResponse.json({ message: "Sign out successes!", signOut: true });

            res.cookies.set("accessToken", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                path: "/",
                maxAge: 0,
            });

            return res;
        }
    }

    return NextResponse.json({ message: "Sign out failure!", signOut: false });
}
