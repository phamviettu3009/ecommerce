import { ProductFilterType } from "@/app/constants/common";
import ProductFilterItem from "@/app/types/productFilter";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

type FilterItemPropsType = {
    productFilter: ProductFilterItem;
    onClickFilterValue: (input: string, checked: boolean) => void;
    filterSelected: Record<string, boolean>;
};

function FilterItem({ productFilter, onClickFilterValue, filterSelected }: FilterItemPropsType) {
    if (productFilter.type == ProductFilterType.PRICE_RANGE) return null;

    return (
        <div className="pt-3">
            <h6>{productFilter.label}</h6>
            <FormGroup>
                {productFilter.values.map(({ id, label, input }) => {
                    return (
                        <FormControlLabel
                            key={id}
                            control={<Checkbox checked={filterSelected[input] ?? false} />}
                            label={label}
                            onChange={(_, value) => {
                                onClickFilterValue(input, value);
                            }}
                        />
                    );
                })}
            </FormGroup>
        </div>
    );
}

export default FilterItem;
