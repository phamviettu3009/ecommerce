import productService from "@/app/services/server/product";
import ProductFilterItem from "@/app/types/productFilter";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchKeyword: string | null = searchParams.get("search") ?? "";

    const productFilters: ProductFilterItem[] = await productService.getProductFilters(searchKeyword);
    return NextResponse.json(productFilters);
}
