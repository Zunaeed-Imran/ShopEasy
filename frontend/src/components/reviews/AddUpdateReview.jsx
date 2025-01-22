import { useContext } from "react";
import { useSelector } from "react-redux";
import { axiosRequest, getConfig } from "../../helper/config";
import { toast } from "react-toastify";
import { ReviewContext } from "./context/reviewContext";


export default function AddUpdateReview() {

    const { token } = useSelector(state => state.user);
  const {
       product, review, setReview, setLoading, handleRating
    } = useContext(ReviewContext)

    const addReview = async e => {
      e.preventDefault();
      try {
        const response = await axiosRequest.post('review/store', review, getConfig(token))
        
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  
  return (
        <div className="row my-5">
          <div className="col-md-6 mx-auto">
            <div className="card shadow-sm">
              <div className="card-header bg-white">
                <h5 className="text-center mt-2">Add Review</h5>
              </div>
              <div className="card-body">
                <form
                  action=""
                  method="post"
                  className="mt-5"
                  onSubmit={e => addReview(e)}
                >
                  <div className="mb-3">
                    <label className="form-label">Title*</label>
                    <input
                      type="text"
                      id="title"
                      value={review.title}
                      onChange={e =>
                        setReview({
                          ...review,
                          title: e.target.value,
                        })
                      }
                      required
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
  )
}
