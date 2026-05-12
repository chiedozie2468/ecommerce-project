import React, { useContext, useState } from "react";
import { getProductById } from "../data/product";
export const CartContext = React.createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(productId) {
    const existing = cartItems.find((item) => item.id === productId);
    if (existing) {
      const updateCartItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setCartItems(updateCartItems);
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  function getCartItemsWithProducts(){
    return cartItems.map(item => ({
        ...item,
        product: getProductById(item.id)
    })).filter(item => item.product);
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter(item => item.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(
        cartItems.map(item => 
            item.id === productId ? { ...item, quantity } : item
        )
    );
  }

  function getCartTotal(){
    const total = cartItems.reduce((total, item)=>{
        const product = getProductById(item.id);
        return total + (product ? product.price * item.quantity : 0)
    }, 0)
    return total.toFixed(2);
  }

  function clearCart(){
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartItemsWithProducts, updateQuantity, removeFromCart,getCartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
