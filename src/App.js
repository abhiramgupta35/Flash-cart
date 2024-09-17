import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Pages/Checkout';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <ToastContainer/>


    </div>
  );
}

export default App;
