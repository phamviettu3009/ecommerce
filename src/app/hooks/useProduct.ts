import { useParams } from "next/navigation";

function useProduct() {
    const params = useParams();
    const { handle } = params;

    console.info("handle", handle);

    return null;
}

export default useProduct;
