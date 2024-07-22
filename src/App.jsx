import { Provider } from "react-redux"
import Collections from "./components/Collections"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import Reviews from "./components/Reviews"
import Shop from "./components/Shop"
import { store } from './redux/store'
import { useState } from "react"
import Cart from "./components/Cart"
import { Toaster } from "react-hot-toast"



function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <Provider store={store}>
        <NavBar setShowCart={setShowCart} />
        {showCart && <Cart setShowCart={setShowCart} />}
        <div id="home">
          <Home />
        </div>
        <div id="shop">
          <Shop />
        </div>

        <Collections />
        <div id="features">
          <Features />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="review">
          <Reviews />
        </div>
        <div>
          <Footer />
        </div>
        <Toaster
          position="botton-center"
          reverseOrder={false}
        />
      </Provider>
    </>
  )
}

export default App
