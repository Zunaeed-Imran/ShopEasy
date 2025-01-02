import { Link } from "react-router-dom";

export default function ProductListItem({product}) {
  console.log(product);
  return (
    <div className="col-md-4 md-3">
      <Link to={''} className="text-decoration-none text-dark">
        <div className="card shadow-sm h-100">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="card-img-top" />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="text-dark">{product.name}</h5>
              <h6 className="badge bg-danger p-2">{product.price}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start align-items-center mb-3">
                {
                  product.sizes?.map(size => (
                    <span key={size.id} className="bg-light text-dark me-2 p-1 fw-bold">
                      <small>{size.name}</small>
                    </span>
                  ))
                }
              </div>
            </div>
            </div>
        </div>
      </Link>
    </div>
  )
}
