import { useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";

export default function ReviewListItem({ review }) {
  
  const { user } = useSelector(state => state.user)

  const renderReviewActions = () => (
    review?.user_id === user?.id &&
      <div className="dropdown ms-auto">
        <i className="bi bi-three-dots-verticle"
          data-bs-toggle="dropdown"></i>
        <ul className="dropdown-menu">
          <li className="">
            <span
              className="dropdown-item"
              style={{ cursor: 'pointer' }}
              onClick={() => console.log('edit')}>
              <i className="bi bi-pen mx-2"></i>
                Update
            </span>
          </li>
          <li className="">
            <span
              className="dropdown-item"
              style={{ cursor: 'pointer' }}
              onClick={() => console.log('delete')}>
              <i className="bi bi-trash mx-2"></i>
                Delete
            </span>
          </li>
        </ul>
      </div>
  )

  const deleteReview = async (review) => {
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div>
      <li className="list-group-item bg-light d-flex justify-content-start align-items-center p-2 mb-2 rounded shadow-sm">
        <div className="me-2">
          <img
            src={review?.user?.image_path}
            alt={review?.user?.name}
            className="rounded-circle"
            width={60}
            height={60}
          />
        </div>
        <div className="d-flex flex-column">
          <h6>{review?.title}</h6>
          <p className="m-0">{review?.body}</p>
          <Rating
            initialValue={review?.rating}
            readonly
            size={24}
          />
          <span className="text-muted">
            {
              review?.created_at
            } by <span className="fw-bold">
              {review?.user?.name}
            </span>
          </span>
        </div>
        {
          renderReviewActions()
        }
      </li>
    </div>
  )
}
