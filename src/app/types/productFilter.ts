export default interface ProductFilterItem {
    id: string;
    label: string;
    presentation: string;
    type: string;
    values: ProductFilterValueItem[];
}

export interface ProductFilterValueItem {
    count: number;
    id: string;
    input: string;
    label: string;
    swatch: {
        color: string;
    } | null;
}
