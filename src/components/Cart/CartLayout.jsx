import { useCart } from './CartContext'
import CartList from "./CartList";

function CartLayout() {
    const { cart, addToCart, setCart, clearCart, removeFromCart} = useCart()
  return (
    <>
      <CartList onAdd={addToCart} cart={cart} setCart={setCart} />
    </>
  );
}

export default CartLayout;
