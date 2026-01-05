import products from "../../data/products";
import { useState } from "react";
import { useCart } from "../Cart/CartContext";
import ProductCard from "./ProductCard";

function ProductsList() {
  const { addToCart } = useCart();

  // quantity per product (keyed by product id)
  const [counts, setCounts] = useState({});

  const increaseCount = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseCount = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  return (
    <div>
      {products.map(product => {
        const quantity = counts[product.id] || 1;

        return (
          <div key={product.id}>
            <ProductCard product={product} />

            <div>
              <button disabled={!product.inStock} onClick={() => decreaseCount(product.id)}>-</button>
              <p>{quantity}</p>
              <button disabled={!product.inStock} onClick={() => increaseCount(product.id)}>+</button>
            </div>

            <button
              disabled={!product.inStock}
              onClick={() => addToCart({ ...product, quantity })}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsList;
