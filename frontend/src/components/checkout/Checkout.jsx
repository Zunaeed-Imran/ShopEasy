import { useSelector } from "react-redux";
import Coupon from "../coupons/Coupon";

export default function Checkout() {
  const { cartItems, validCoupon } = useSelector(state => state.cart);
  const totalOfCartItems = cartItems.reduce((acc, item) => acc += item.price * item.qty, 0)
  const calculateDiscount = () => {
    return validCoupon?.discount && totalOfCartItems * validCoupon?.discount / 100
  }
  const totalAfterDiscount = () => {
    return totalOfCartItems - calculateDiscount()
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row my-5">
          <div className="col-md-7">{/* User information */}</div>
          <div className="col-md-5">
            <Coupon />
            <ul className="list-group">
              {cartItems.map(item => (
                <li key={item.ref} className="list-group-item d-flex">
                  <img
                    src={item.image}
                    width={60}
                    height={60}
                    className="img-fluid rounded me-2"
                  />
                  <div className="d-flex flex-col">
                    <h5 className="my-1">
                      <strong>{item.name}</strong>
                    </h5>
                    <span className="text-muted">
                      <strong>Color: {item.color}</strong>
                    </span>
                    <span className="text-muted">
                      <strong>Size: {item.size}</strong>
                    </span>
                  </div>
                  <div className="d-flex flex-column ms-auto">
                    <span className="text-danger fw-bold">
                      ${item.price * item.qty}
                    </span>
                  </div>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Discount {validCoupon?.discount}%</span>
                <span className="fw-normal text-danger">
                  {validCoupon?.name}<i className="bi bi-trash"></i>
                </span>
                <span className="fw-bold text-danger">
                  ${calculateDiscount}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">
                  Total: 
                </span>
                <span className="fw-bold">
                  ${totalAfterDiscount()}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
