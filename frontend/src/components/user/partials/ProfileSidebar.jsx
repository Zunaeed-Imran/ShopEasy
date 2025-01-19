import { use } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function ProfileSidebar() {

  const {user, token} = useSelector(state => state.user)

  return (
    <div className="col-md-4">
      <div className="card-p-2">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <img
            src={user?.profile_image}
            alt={user?.name}
            width={150}
            height={150}
            className="rounded-circle"
          />
        </div>
      </div>
      <ul className="list-group w-100 text-center mt-2">
        <li className="list-list-group-item">
          <i className="bi bi-person"></i> {user?.name}
        </li>
        <li className="list-group-item">
          <i className="bi bi-envelope-at-fill"></i> {user?.email}
        </li>
        <li className="list-group-item">
          <Link
            to={'/user/orders'}
            className="text-decoration-none text-dark">
            <i className="bi bi-bag-check-fill"></i> Orders
          </Link>
        </li>
      </ul>
    </div>
  )
}
