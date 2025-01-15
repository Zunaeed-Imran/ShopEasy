import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

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
            <form action="" method="post" className="mt-5">  
              <div className="mb-3">
                <label  className="form-label">Name*</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Email address*</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password*</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
