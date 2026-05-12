import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/product';
import '../App.css'

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = getProductById(id); 
        if (!foundProduct) {
            navigate("/");
            return;
        }
        setProduct(foundProduct);
    }, [id, navigate]);

    if (!product) {
        return <h1 className="loading">Loading...</h1>;
    }

    return (
        <div className="page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img
                            src={product?.image}
                            alt={product?.name}
                        />
                    </div>
                    <div className="product-detail-info">
                        <h1>{product?.name}</h1>
                        <p className="price">
                            ${product?.price}
                        </p>
                        <p className="product-description">{product.description}</p>
                        <button className="add-to-cart">
                            Add to Cart
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}