import { CartProvider } from "./components/Cart/CartContext"
import Products from "./components/Products/Products"
import Header from "./components/Header"
import CartLayout from "./components/Cart/CartLayout"
function App() {
  
    return (
      <CartProvider>
      <Header/>
      <Products/>
      <CartLayout/>
      </CartProvider>

    )
}

export default App
