import ProfileSidebar from "./partials/ProfileSidebar";
import UpdateUserinfos from './UpdateUserinfos';

export default function Profile() {
  return (
    <div className="row my-5">
      <ProfileSidebar />
      <UpdateUserinfos profile={true} />
    </div>
  )
}
