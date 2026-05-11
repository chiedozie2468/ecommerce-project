import React  from "react";
import { getProducts } from "../data/product";
import '../App.css'
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {

  const product = getProducts();

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopHub</h1>
        <p className="home-subtitle">Your one-stop shop for all your needs</p>
      </div>
      <div className="container">
        <h2 className="page-title">Featured Products</h2>
        <div className="product-grid">
          {product.map((product) =>(
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
