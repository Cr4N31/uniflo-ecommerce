import { CartProvider } from "./components/Cart/CartContext";
import ProductLayout from "./components/Products/ProductLayout";
import CartLayout from "./components/Cart/CartLayout";
import { useCart } from "./components/Cart/CartContext";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function AppContent() {
  const { isCartOpen } = useCart();

  return (
    <>
      <ProductLayout/>

      {/* Cart sidebar */}
      {isCartOpen && <CartLayout />}
    </>
  );
}

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
