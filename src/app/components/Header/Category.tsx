import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { objectToQueryString } from "@/app/utils/filter";
import { ProductFilterValueItem } from "@/app/types/productFilter";
import productService from "@/app/services/server/product";

async function Category() {
    const categories: ProductFilterValueItem[] = await productService.getCategories();

    return (
        <li>
            <div className="collection">
                <MenuIcon fontSize="small" className="collection__icon" />
                <a className="collection__title">Danh mục sản phẩm</a>
            </div>

            <div className="submenu">
                <ul>
                    {categories.map(({ id, label, input }) => {
                        return (
                            <Link key={id} href={`/products?${objectToQueryString(JSON.parse(input))},`}>
                                <li>{label}</li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </li>
    );
}

export default Category;
