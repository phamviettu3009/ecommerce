import React from "react";
import "./style.scss";
import FilterItem from "./FilterItem";
import FilterPrice from "./FilterPrice";
import useFilter from "@/app/hooks/useFilter";

function Filter() {
    const { productFilters, onFilter, filterSelected, priceFilter, onChangeFilterRangePrice, rangePrice } = useFilter();

    return (
        <section className="filter">
            {productFilters.map((filter) => {
                return (
                    <FilterItem
                        key={filter.id}
                        productFilter={filter}
                        onClickFilterValue={onFilter}
                        filterSelected={filterSelected}
                    />
                );
            })}

            {priceFilter && (
                <FilterPrice
                    priceFilter={priceFilter}
                    onChangeFilterRangePrice={onChangeFilterRangePrice}
                    rangePrice={rangePrice}
                />
            )}
        </section>
    );
}

export default Filter;
