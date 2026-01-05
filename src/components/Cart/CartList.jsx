import { useCart } from './CartContext';

function CartList() {
  const { cart, clearCart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed right-0 top-16 w-80 bg-white shadow-lg p-4 border overflow-auto max-h-[70vh]">
      <h2 className="font-bold text-xl mb-2">Cart</h2>

      <button
        onClick={clearCart}
        className="mb-3 text-sm text-red-600"
      >
        Clear Cart
      </button>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {cart.map(item => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>
                {item.title} × {item.quantity}
              </span>

              <span>${item.price * item.quantity}</span>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 font-bold">
        Total: ${total}
      </div>
    </div>
  );
}

export default CartList;
