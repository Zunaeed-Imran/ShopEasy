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
        </div>
      </Link>
    </div>
  )
}
