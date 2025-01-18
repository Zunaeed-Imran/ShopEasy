import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { axiosRequest, getConfig } from "../../helper/config"
import { toast } from "react-toastify"
import { setValidCoupon } from "../../redux/slices/cartSlice"

export default function Coupon() {

  const {token} = useSelector(state => state.user)
  const [coupon, setCoupon] = useState({
    name: ''
  })

  const dispatch = useDispatch()

  const applyCoupon = async () => {
    try {
      const response = await axiosRequest.post('apply/coupon', coupon, getConfig(token))
      if (response.data.error) {
        toast.error(response.data.error)
        setCoupon({
          name: ''
        })
      } else {
        dispatch(setValidCoupon(response.data.coupon))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      
    </div>
  )
}
