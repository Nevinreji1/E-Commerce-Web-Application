import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
      image: "https://via.placeholder.com/150"
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple E-Commerce Store</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              width: "200px"
            }}
          >
            <img
              src={product.image}
              alt=""
              width="100%"
            />

            <h3>{product.name}</h3>

            <p>₹ {product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Cart Items: {cart.length}</h2>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}

      <button>Checkout</button>
    </div>
  );
}

export default App;