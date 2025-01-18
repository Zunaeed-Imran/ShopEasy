import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { axiosRequest, getConfig } from "../../helper/config"

export default function Coupon() {

  const {token} = useSelector(state => state.user)
  const [coupon, setCoupon] = useState({
    name: ''
  })

  const dispatch = useDispatch()

  const applyCoupon = async () => {
    try {
      const response = await axiosRequest.post('apply/coupon', coupon, getConfig(token))
    } catch (error) {
      
    }
  }

  return (
    <div>
      
    </div>
  )
}
