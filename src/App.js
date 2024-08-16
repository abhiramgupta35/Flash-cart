
import Home from './Pages/Home';

import { Routes, Route } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/login" element={ <LoginSignup /> } />
      </Routes>


    </div>
  );
}

export default App;
