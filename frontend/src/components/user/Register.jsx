import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { axiosRequest } from "../../helper/config"
import { toast } from "react-toastify"
import Spinner from "../layouts/Spinner"

export default function Register() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const registerNewUser = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const response = await axiosRequest.post('user/register', user)
      toast.success(response.data.message)
      navigate('/login')
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div className="row my-5">
      <div className="col-md-6 mx-auto">
        <div className="card shadow-sm">
          <div className="card-header bg-white">
            <h5 className="text-center mt-2">
              Register
            </h5>
          </div>
          <div className="card-body">
            <form
              action=""
              method="post"
              className="mt-5"
              onSubmit={(e) => registerNewUser(e)}
            >  
              <div className="mb-3">
                <label  className="form-label">Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={user.name}
                  onChange={(e) => setUser({
                    ...user, name: e.target.value
                  })} />
              </div>
              <div className="mb-3">
                <label  className="form-label">Email address*</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={user.email}
                  onChange={(e) => setUser({
                    ...user, email: e.target.value
                  })}
                />
                <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password*</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={user.password}
                  onChange={(e) => setUser({
                    ...user, password: e.target.value
                  })}
                />
              </div>
              {
                loading ?
                  <Spinner />
                  :
              <button type="submit" className="btn btn-dark btn-sm">Submit</button>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
