import { ProductFilterType, ValueFilterType } from "@/app/constants/common";
import ProductFilterItem from "@/app/types/productFilter";
import { Slider } from "@mui/material";
import React from "react";

type FilterPricePropsType = {
    priceFilter: ProductFilterItem;
    onChangeFilterRangePrice: (rangePrice: number[]) => void;
    rangePrice: { range: number[]; filter: number[] };
};

function FilterPrice({ priceFilter, onChangeFilterRangePrice, rangePrice }: FilterPricePropsType) {
    if (priceFilter.type == ProductFilterType.PRICE_RANGE) {
        return (
            <div className="pt-3">
                <h6>{priceFilter.label}</h6>
                {priceFilter.values.map((value) => {
                    return (
                        <div key={value.id}>
                            <div>{value.label}</div>
                            {value.id == ValueFilterType.FILTER_PRICE && (
                                <Slider
                                    onChange={(_, value) => {
                                        onChangeFilterRangePrice(value as number[]);
                                    }}
                                    value={rangePrice.filter}
                                    min={rangePrice.range[0]}
                                    max={rangePrice.range[1]}
                                    aria-label="Default"
                                    valueLabelDisplay="auto"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }

    return null;
}

export default FilterPrice;
