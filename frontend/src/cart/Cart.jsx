import { useDispatch, useSelector } from "react-redux"
import Alert from "../components/layouts/Alert"
import { decrementQ, incrementQ, removeFromCart } from "../redux/slices/cartSlice";


export default function Cart() {
  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const total = cartItems.reduce((acc, item) => acc += item.price * item.qty, 0)

  return (
    <div className="row my-4">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            {cartItems.length > 0 ? (
              <>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Color</th>
                      <th>Size</th>
                      <th>Subtitle</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>{(index += 1)}</td>
                        <td>
                          <img
                            src={item.image}
                            className="img-fluid rounded"
                            width={60}
                            height={60}
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <i
                            onClick={() => dispatch(incrementQ(item))}
                            className="bi bi-caret-up"
                            style={{ cursor: 'pointer' }}
                          ></i>
                          <span className="mx-2">{item.qty}</span>
                          <i
                            onClick={() => dispatch(decrementQ(item))}
                            className="bi bi-caret-down"
                            style={{ cursor: 'pointer' }}
                          ></i>
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <div
                            className="border border-light-subtle border-2"
                            style={{
                              backgroundColor: item.color.toLowerCase?.(),
                              height: '20px',
                              width: '20px',
                            }}
                          ></div>
                        </td>
                        <td>
                          <span className="bg-light text-dark me-2 p-1 fw-bold">
                            <small>{item.size?.name}</small>
                          </span>
                        </td>
                        <td>${item.qty * item.price}</td>
                        <td>
                          <i
                            className="bi bi-cart-x"
                            onClick={() => dispatch(removeFromCart(item))}
                            style={{ cursor: 'pointer', color: 'red' }}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-center">
                  <div className="border border-dark border-3 fw-bold p-2 rounded">
                    Total: ${total}
                  </div>
                </div>
              </>
            ) : (
                <Alert
                  content={'Your cart is empty'}
                  type={'primary'} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
