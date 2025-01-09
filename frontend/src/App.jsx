import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/layouts/Header'
import Product from './components/products/Product'
import Cart from './cart/Cart'

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:slug" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
