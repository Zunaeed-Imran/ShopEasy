import ProductListItem from "./ProductListItem"

export default function ProductsList({products}) {
  return (
    <div>
      {
        products?.map(product => {
          <ProductListItem product={product} key={product.id} />
        })
      }
    </div>
  )
}
