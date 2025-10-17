import "./HomePage.css";
import axios from "axios";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { ProductGrid } from "./ProductGrid";

export function HomePage({ cart, loadCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>E-Commerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
