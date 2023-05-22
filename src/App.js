import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Contact from './components/Contact';
import Login from './components/Login';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    console.log(data)
}
  return (
    <>
      <Router>
     
        <div className="container">
          <Routes>
            <Route exact path="/contact" element={<Contact />}> </Route>
            <Route exact path="/" element={<Home addToCart={addToCart}/>}>   </Route>
            <Route exact path="/login" element={<Login />}>  </Route>
            <Route exact path="/cart" element={<Cart  cart={cart} />}>  </Route>

          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
