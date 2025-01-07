import { useState } from "react";
import ProductListItem from "./ProductListItem"

export default function ProductsList({ products }) {
  // console.log(products);

  const [productsToShow, setProductsToShow] = useState(5)

  const loadMoreProducts = () => {
    if (productsToShow > products.length) {
      return;
    } else {
      setProductsToShow(preProductsToShow => preProductsToShow += 5)
    }
  }


  return (
    <div className="row my-5">
      {products?.slice(0, productsToShow).map(product => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  );
}
