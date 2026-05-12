import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <div className="product-card" >
              <img src={product.image} alt={product.name} />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="product-actions">
                <Link to={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
                <button className="btn btn-secondary">Add to Cart</button>
              </div>
            </div>
  )
}
