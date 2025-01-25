import { useState } from "react"
import { useSelector } from "react-redux"
import { ReviewContext } from "./context/reviewContext"
import AddUpdateReview from "./AddUpdateReview"
import ReviewsList from "./ReviewsList"
// prop prop validation
import PropTypes from 'prop-types'

export default function Reviews({product, setLoading}) {

  const { user, isLoggidIn } = useSelector(state => state.user)
  const [review, setReview] = useState({
    product_id: product?.id,
    user_id: user?.id,
    title: '',
    body: '',
    rating: 0,
  })
  const [updating, setUpdating] = useState(false)

  // Catch Rating value
  const handleRating = (rating) => {
    setReview({
      ...review, rating
    })
    
  }

  const editReview = (data) => {
    setReview(data)
    setUpdating(true)

    }
  const clearReview = () => {
    setReview({
      product_id: product?.id,
      user_id: user?.id,
      title: '',
      body: '',
      rating: 0,
    });
    if (updating) {
      setUpdating(false)
    }
  }

  const checkIfUserBoughtTheProduct = () => {
    return user?.orders?.some(order => order?.products?.some(item => item.id === product.id))
  }


  return (
    <ReviewContext.Provider
      value={{
        product,
        review,
        setReview,
        setLoading,
        handleRating,
        clearReview,
        updating,
        setUpdating,
        editReview
      }}
    >
      <ReviewsList/>
      {
        isLoggidIn && checkIfUserBoughtTheProduct() && <AddUpdateReview />
      }
    </ReviewContext.Provider>
  );
}


// prop validation
Reviews.propTypes = {
  product: PropTypes.string,
  setLoading: PropTypes.bool
}