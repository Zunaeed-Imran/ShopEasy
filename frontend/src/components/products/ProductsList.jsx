import { useState } from "react";
import ProductListItem from "./ProductListItem"
// import prop validation
import PropTypes from 'prop-types'

export default function ProductsList({ products }) {
  // console.log(products);

  const [productsToShow, setProductsToShow] = useState(6)

  const loadMoreProducts = () => {
    if (productsToShow > products?.length) {
      return;
    } else {
      setProductsToShow(preProductsToShow => preProductsToShow += 6)
    }
  }


  return (
    <div className="row my-5">
      {products?.slice(0, productsToShow).map(product => (
        <ProductListItem product={product} key={product.id} />
      ))}
      {
        productsToShow < products.length && 
        <div className="d-flex justify-content-center my-3">
            <button
              className="btn btn-sm btn-dark"
              onClick={() => loadMoreProducts()}>
              <i className="bi bi-arrow-clockwise"></i>
              Load More
            </button>
        </div>
      }
    </div>
  );
}


// prop defining
ProductsList.propTypes = {
  products: PropTypes.any,
};