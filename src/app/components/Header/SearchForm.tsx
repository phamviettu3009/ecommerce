"use client";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "next/navigation";

function SearchForm() {
    const searchPrams = useSearchParams();
    const search: string | null = searchPrams.get("search");

    return (
        <form className="search-bar" method="GET" action="/products">
            <input type="text" name="search" defaultValue={search ?? undefined} placeholder="Tìm kiếm" />
            <button type="submit">
                <SearchIcon color="action" />
            </button>
        </form>
    );
}

export default SearchForm;
