import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Stripe from "./Stripe"


export default function PayByStripe() {

  const { isLoggedIn } = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoggedIn) navigate('/login')
  }, [isLoggedIn])

  return (
    <div>
      <Stripe />
    </div>
  )
}
