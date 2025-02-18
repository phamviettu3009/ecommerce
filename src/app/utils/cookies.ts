import { cookies } from "next/headers";

export async function getAccessToken(): Promise<string | null> {
    const cookieStore = cookies();
    const accessToken: string | undefined = (await cookieStore).get("accessToken")?.value ?? "";
    return accessToken;
}
