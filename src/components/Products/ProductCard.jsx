import products from "../../data/products";

function ProductCard() {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.img} alt={product.title} />

          <h2>{product.title}</h2>
          <h3>${product.price}</h3>

          <p>{product.category}</p>

          <p>
            {product.inStock ? "In stock" : "Out of stock"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
