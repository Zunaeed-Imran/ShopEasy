import ProductListItem from "./ProductListItem"

export default function ProductsList({ products }) {
  console.log(products);
  return (
    <div className="row my-5">
      {products?.map(product => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  );
}
