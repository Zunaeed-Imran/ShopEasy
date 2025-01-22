import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ProfileSidebar from "./partials/ProfileSidebar"

export default function UserOrders() {

  const { user, isLoggedIn, token } = useSelector(state => state.user)
  const navigate = useNavigate()
  const [ordersToShow, setOrdersToShow] = useState(5)
  
  useEffect(() => {
    if(!isLoggedIn) navigate('/login')
  }, [isLoggedIn])
  
  const loadMoreOrders = () => {
    if (ordersToShow > user?.orders?.length) {
      return;
    } else {
      setOrdersToShow(prevOrdersToShow => prevOrdersToShow += 5)
    }
  }

  return (
    <div className="row my-5">
      <ProfileSidebar />
      <div className="col-md-8">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Orderd Date</th>
                <th>Delivered Date</th>
              </tr>
            </thead>
            <tbody>
              {user?.orders?.slice(0, ordersToShow).map((order, index) => (
                <tr key={order}>
                  <th>{index + 1}</th>
                  <th>
                    <div className="d-flex flex-column">
                      {order?.products?.map(product => (
                        <span className="badge bg-success my-1 rounded-0">
                          {product.name}
                        </span>
                      ))}
                    </div>
                  </th>
                  <th>
                    <div className="d-flex flex-column">
                      {order?.products?.map(product => (
                        <span className="badge bg-danger my-1 rounded-0">
                          {product.price}
                        </span>
                      ))}
                    </div>
                  </th>
                  <th>{ order.qty }</th>
                  <th>
                    <span className="badge bg-secondary my-1 rounded-0">
                      ${order.total}
                    </span>
                  </th>
                  <th>{ order.created_at }</th>
                  <th>Delivered Date</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
