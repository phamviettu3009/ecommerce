import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { SortProduct } from "@/app/constants/common";

function Sort() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentParams: URLSearchParams = new URLSearchParams(window.location.search);

    const sortOptions: { name: string; value: SortProduct }[] = [
        { name: "Chọn", value: SortProduct.SELECT_OPTIONS },
        { name: "Giá", value: SortProduct.PRICE },
        { name: "Sản phẩm liên quan", value: SortProduct.RELEVANCE },
    ];

    const [sortSelected, setSortSelected] = useState<SortProduct>(SortProduct.SELECT_OPTIONS);

    useEffect(() => {
        extractSortFromURL();
    }, []);

    const extractSortFromURL = () => {
        const sortParams: string | null = searchParams.get("sort");
        const sortProduct: SortProduct | null = sortParams as SortProduct;
        if (Object.values(SortProduct).includes(sortProduct)) {
            setSortSelected(sortProduct);
        } else {
            setSortSelected(SortProduct.SELECT_OPTIONS);
            currentParams.delete("sort", sortProduct);
            router.push(`${window.location.pathname}?${currentParams.toString()}`);
        }
    };

    const onSortHandler = (options: SelectChangeEvent<SortProduct>) => {
        const value = options.target.value;
        setSortSelected(value as SortProduct);

        if (value === SortProduct.SELECT_OPTIONS) {
            const preSortParams: string | null = currentParams.get("sort");
            currentParams.delete("sort", preSortParams ?? "");
        } else {
            currentParams.set("sort", value);
        }

        router.push(`${window.location.pathname}?${currentParams.toString()}`);
    };

    return (
        <section className="sort mb-3">
            <h6>Sort</h6>
            <FormControl className="m-0 p-0" size="small" sx={{ m: 1, minWidth: "100%" }}>
                <Select
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                    value={sortSelected}
                    onChange={onSortHandler}
                >
                    {sortOptions.map(({ name, value }) => (
                        <MenuItem key={value} value={value}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </section>
    );
}

export default Sort;
