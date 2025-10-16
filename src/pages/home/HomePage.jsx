import "./HomePage.css";
import axios from "axios";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { ProductGrid } from "./ProductGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>E-Commerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
