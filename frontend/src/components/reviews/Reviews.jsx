import { useState } from "react"
import { useSelector } from "react-redux"
import { ReviewContext } from "./context/reviewContext"
import AddUpdateReview from "./AddUpdateReview"
import ReviewsList from "./ReviewsList"

export default function Reviews({product, setLoading}) {

  const { user, isLoggidIn } = useSelector(state => state.user)
  const [review, setReview] = useState({
    product_id: product?.id,
    user_id: user?.id,
    title: '',
    body: '',
    rating: 0,
  })

  // Catch Rating value
  const handleRating = (rating) => {
    setReview({
      ...review, rating
    })
    
  }

  const clearReview = () => {
    setReview({
      product_id: product?.id,
      user_id: user?.id,
      title: '',
      body: '',
      rating: 0,
    });
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
      }}
    >
      <ReviewsList/>
      {
        isLoggidIn && <AddUpdateReview />
      }
    </ReviewContext.Provider>
  );
}
