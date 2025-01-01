import { useEffect, useState } from "react"
import ProductsList from "./products/ProductsList"
import { axiosRequest } from "../helper/config"

export default function Home() {
  const [products, setProducts] = useState([])
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axiosRequest.get(
          'products'
        );
        setProducts(response.data.data)
        setColors(response.data.colors)
        setSizes(response.data.sizes);
        console.log(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllProducts()
  }, [])

  return (
    <div>
      <ProductsList products={products} />
    </div>
  )
}
