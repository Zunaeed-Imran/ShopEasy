import { useSelector } from "react-redux";
import ProfileSidebar from "./partials/ProfileSidebar";
import UpdateUserinfos from './UpdateUserinfos';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const { isLoggedIn } = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoggedIn) navigate('/login')
  }, [isLoggedIn])

  return (
    <div className="row my-5">
      <ProfileSidebar />
      <UpdateUserinfos profile={true} />
    </div>
  )
}
