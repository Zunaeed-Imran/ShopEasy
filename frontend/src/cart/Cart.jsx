import { useSelector } from "react-redux"
import Alert from "../components/layouts/Alert"


export default function Cart() {
  const {cartItems} = useSelector(state => state.cart)
  return (
    <div className="row my-4">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            {
              cartItems.length > 0 ?
                <>
                  <table className="table">
                    <thead>
                      <th>#</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Color</th>
                      <th>Size</th>
                      <th>Subtitle</th>
                      <th></th>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item, index) => (
                          <tr>
                            <td>{index+=1}</td>
                          <td>
                            <img 
                            src={item.image} 
                            className="img-fluid rounded"
                            width={60} height={60} />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.qty}</td>
                          <td>{item.price}</td>
                          <td>{item.color}</td>
                          <td>{item.size}</td>
                          <td>{item.qty * item.price}</td>
                          <td></td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </>
                :
                <Alert content={'Your cart is empty'} type={'primary'}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
