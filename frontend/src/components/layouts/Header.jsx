import { useSelector } from "react-redux"

export default function Header() {
  const {cartItems} = useSelector(state => state.cart)
  return (
    <div>
      <h1 className="text-3xl">Welcome to ShopEasy</h1>
      <p>cart {cartItems.length}</p>
    </div>
  )
}
