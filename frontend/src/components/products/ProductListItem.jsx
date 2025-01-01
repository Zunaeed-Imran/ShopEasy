
export default function ProductListItem({product}) {
  console.log(product);
  return (
    <div>
      {product?.name}
    </div>
  )
}
