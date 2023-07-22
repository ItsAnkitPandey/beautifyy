import './App.css';
import { useEffect} from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';
import Login from './components/Login';
import Cart from './components/Cart';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  const [showPopup, setShowPopup] = useState(false); // New state to manage the pop-up visibility
  const [cart, setCart] = useState([]);
  
  const addToCart = (data) => {
    const existingItem = cart.find((item) => item.id === data.id);

    if (existingItem) {
      // If the item exists, update the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === data.id ? { ...item, inCart: item.inCart + 1 } : item
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { ...data, inCart: 1 }]);
    }

    localStorage.setItem('cart', JSON.stringify(cart));   // Adding items to local storage. It can helps in when we refresh page the items will show there as it it.
    setShowPopup(true); 
    // alert("Added to cart");
  }
  
  useEffect(() => {
    // Retrieve the cart items from local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <>
      <Router>
        <div className="container">
        <Navbar />
          <Routes>
            <Route exact path="/contact" element={<Contact />}> </Route>
            <Route exact path="/" element={<Home addToCart={addToCart}  />}> </Route>
            <Route exact path="/login" element={<Login />}>  </Route>
            <Route exact path="/cart" element={<Cart cart={cart} setCart ={setCart} />}>  </Route>
            <Route exact path="/checkout" element={<Checkout cart={cart} />}>  </Route>
          </Routes>
          <Footer />
      {showPopup && <Popup setShowPopup={setShowPopup} cart={cart} setCart={setCart} />}
        </div>
      </Router>

    </>
  );
}

export default App;
