// productLoader.js

export default async function productLoader({ params }) {
    const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
    );

    if (!response.ok) {
        throw new Response("Product not found", {
            status: response.status,
        });
    }

    return response.json();
}