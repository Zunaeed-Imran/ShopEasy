import { useState } from "react"
import { useSelector } from "react-redux"

export default function Reviews() {

  const { user, isLoggidIn } = useSelector(state => state.user)
  const [review, setReview] = useState({
    product_id: product?.id,
    user_id: user?.id,
    title: '',
    body: '',
    rating: 0,
  })

  return (
    <div>
      Review Component
    </div>
  )
}
