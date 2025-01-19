import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosRequest, getConfig } from '../../helper/config';
import { toast } from 'react-toastify';
import Spinner from '../layouts/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/slices/userSlice';

export default function Register() {
  const { user, token } = useSelector(state => state.user);
  const [userInfos, setUserInfos] = useState({
    phone_number: user?.phone_number,
    address: user?.address,
    city: user?.city,
    country: user?.country,
    zip_code: user?.zip_code
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const UpdateUserInfos = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosRequest.put('user/profile/update', userInfos, getConfig(token));
      dispatch(setCurrentUser(response.data.user))
      setLoading(false);
      toast.success(response.data.message);
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
            <h5 className="text-center mt-2">User Details</h5>
          </div>
          <div className="card-body">
            <form
              action=""
              method="post"
              className="mt-5"
              onSubmit={e => UpdateUserInfos(e)}
            >
              <div className="mb-3">
                <label className="form-label">Phone Number*</label>
                <input
                  type="text"
                  id="phone_number"
                  value={userInfos.phone_number || ''}
                  onChange={e =>
                    setUserInfos({
                      ...userInfos,
                      phone_number: e.target.value,
                    })
                  }
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address*</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={user.email}
                  onChange={e =>
                    setUser({
                      ...user,
                      email: e.target.value,
                    })
                  }
                />
                <div id="emailHelp" className="form-text">
                  Well never share your email with anyone else.
                </div>
                {useValidations(validationErrors, 'email')}
              </div>
              <div className="mb-3">
                <label className="form-label">Password*</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={user.password}
                  onChange={e =>
                    setUser({
                      ...user,
                      password: e.target.value,
                    })
                  }
                />
                {useValidations(validationErrors, 'password')}
              </div>
              {loading ? (
                <Spinner />
              ) : (
                <button type="submit" className="btn btn-dark btn-sm">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
