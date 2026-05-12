const products = [
  {
    id: 1,
    name: "Green T-Shirt",
    price: 99.99,
    description:
      "Comfortable premium cotton T-shirt with a modern slim fit design. Perfect for casual wear and everyday fashion.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },

  {
    id: 2,
    name: "Black Hoodie",
    price: 149.99,
    description:
      "Soft fleece hoodie designed for warmth and comfort. Features a stylish oversized fit and front pocket.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  },

  {
    id: 3,
    name: "White Sneakers",
    price: 199.99,
    description:
      "Lightweight white sneakers with breathable materials and durable soles for all-day comfort.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },

  {
    id: 4,
    name: "Blue Jeans",
    price: 120.5,
    description:
      "Classic blue denim jeans with stretch fabric for flexibility and a clean modern look.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },

  {
    id: 5,
    name: "Smart Watch",
    price: 250.0,
    description:
      "Advanced smartwatch with fitness tracking, notifications, heart-rate monitoring, and long battery life.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },

  {
    id: 6,
    name: "Wireless Headphones",
    price: 180.75,
    description:
      "Noise-cancelling wireless headphones delivering immersive sound quality and comfortable ear cushions.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },

  {
    id: 7,
    name: "Gaming Laptop",
    price: 999.99,
    description:
      "High-performance gaming laptop with fast graphics, powerful processor, and smooth display for gaming and productivity.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },

  {
    id: 8,
    name: "Brown Backpack",
    price: 89.99,
    description:
      "Stylish leather backpack with spacious compartments suitable for school, work, and travel.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },

  {
    id: 9,
    name: "Office Chair",
    price: 320.0,
    description:
      "Ergonomic office chair with adjustable height, lumbar support, and breathable mesh backrest.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },

  {
    id: 10,
    name: "iPhone 15 Pro",
    price: 1299.99,
    description:
      "Premium smartphone featuring advanced cameras, powerful performance, and a sleek titanium design.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}