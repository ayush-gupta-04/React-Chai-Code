// Product.jsx
import { useLoaderData } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();

  return <div>{product.title}</div>;
}