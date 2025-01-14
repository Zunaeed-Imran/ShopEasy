import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/layouts/Header'
import Product from './components/products/Product'
import Cart from './cart/Cart'
import Checkout from './components/checkout/Checkout'
import Login from './components/user/Login'
import Register from './components/user/Register'

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
