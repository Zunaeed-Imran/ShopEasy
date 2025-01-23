import { useContext } from 'react'
import { ReviewContext } from './context/reviewContext';
import ReviewListItem from './ReviewListItem';

export default function ReviewsList() {

    const { product}  = useContext(ReviewContext);


  return (
    <div>
      <ul>
        {
          product?.reviews?.map(review => (
            <ReviewListItem key={review.id} review={review} />
          ))
        }
      </ul>
    </div>
  )
}
