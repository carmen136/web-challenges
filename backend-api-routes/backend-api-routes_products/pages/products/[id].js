import useSWR from "swr";
import { useRouter } from "next/router";


const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;

    const {data: product, error} = useSWR(id ? `/api/products/${id}` : null, fetcher);

    if(error) {
        return <h1>Error: Product not found</h1>
    }

    if (!product) {
        return <h1>Loading...</h1>;
    }

    if (!product.name) {
        return <h1>Product not found</h1>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>Price: {product.price} {product.currency}</p>
        </div>
    )
};