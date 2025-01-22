import { useContext } from "react";
import { useSelector } from "react-redux";
import { axiosRequest, getConfig } from "../../helper/config";
import { ReviewContext } from "./context/reviewContext";
import Rating from 'react-simple-star-rating'

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
                    <label className="form-label">Body*</label>
                    <textarea
                      name="body" value={review.body}
                      rows={30} id="body"
                      onChange={(e) => setReview({
                        ...review, body: e.target.value
                      })}
                      className="form-control"
                      placeholder="Review"
                    >
                          
                    </textarea>
                  </div>
                  <div className="mb-3">
                    <Rating
                      initialValue={review.rating}
                      onClick={handleRating}
                      size={32}
                    />
                  </div>
                    <button type="submit" className="btn btn-dark btn-sm">
                      Submit
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}
