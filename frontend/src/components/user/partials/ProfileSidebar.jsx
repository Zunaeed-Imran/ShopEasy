import { use } from "react"
import { useSelector } from "react-redux"


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
    </div>
  )
}
