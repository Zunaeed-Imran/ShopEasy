import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { axiosRequest } from "../../helper/config";
import { toast } from "react-toastify";
import Spinner from "../layouts/Spinner";

export default function Login() {

    const [user, setUser] = useState({
      email: '',
      password: ''
    })
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const loginUser = async e => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await axiosRequest.post('user/login', user);
        setLoading(false);
        if (response.data.error) {
          toast.error(response.data.message)
        } else {
          toast.success(response.data.message)
          navigate('/');
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

  return (
        <div className="row my-5">
          <div className="col-md-6 mx-auto">
            <div className="card shadow-sm">
              <div className="card-header bg-white">
                <h5 className="text-center mt-2">
                  Login
                </h5>
              </div>
              <div className="card-body">
                <form
                  action=""
                  method="post"
                  className="mt-5"
                  onSubmit={(e) => loginUser(e)}
                >
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
