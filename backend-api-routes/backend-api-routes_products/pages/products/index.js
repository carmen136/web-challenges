import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ProductsPage() {
    const {data: products, error} = useSWR("/api/products/", fetcher);

    if(error) {
        return <h1>Error loading products</h1>
    }

    return (
        <ul>
        {products ? (
            products.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.description} - {product.price} {product.currency}
                </li>
            ))
        ) : (
            <li>Loading...</li> 
        )}
    </ul>
    )
};