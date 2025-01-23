
export default function ReviewListItem({review}) {

  return (
    <div>
      <li className="list-group-item bg-light d-flex justify-content-start align-items-center">
        <div className="me-2">
          <img
            src={review?.user?.image_path}
            alt={review?.user?.name}
            className="rounded-circle"
            width={60}
            height={60}
          />
        </div>
      </li>
    </div>
  )
}
