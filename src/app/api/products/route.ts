import { SortProduct } from "@/app/constants/common";
import productService from "@/app/services/server/product";
import ListResponse from "@/app/types/listResponse";
import Product from "@/app/types/product";
import { extractFilterParams, queryStringToObject, transformObject } from "@/app/utils/filter";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchKeyword: string | null = searchParams.get("search") ?? "";

    const filterParams: string = extractFilterParams(searchParams.toString());
    const filterVariables: Record<string, any> = queryStringToObject(filterParams);
    const sortParams: SortProduct | null = searchParams.get("sort") as SortProduct;
    const cursor: string | null = searchParams.get("cursor");

    const transformFilterVariables: Record<string, any> = transformObject(filterVariables, {
        asNumbers: ["filter.price.min", "filter.price.max"],
    });

    const response: ListResponse<Product> | undefined = await productService.getProducts(
        cursor,
        searchKeyword,
        transformFilterVariables,
        sortParams,
    );

    return NextResponse.json(response);
}
