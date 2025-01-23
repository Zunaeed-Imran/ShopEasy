import { Rating } from "react-simple-star-rating";

export default function ReviewListItem({review}) {

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
      </li>
    </div>
  )
}
