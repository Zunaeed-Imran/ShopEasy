import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Product() {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState([])
  const [selectedColor, setSelectedColor] = useState([])
  const [selectedSize, setSelectedSize] = useState([])
  const [qty, setQty] = useState([])
  const [error, setError] = useState([])
  const { slug } = useParams()

  
    useEffect(() => {
      const fetchProductBySlug = async () => {
        setLoading(true)
        try {
            const response = await axiosRequest.get(`product/${slug}/show`);
            setProducts(response.data.data)
            setLoading(false)
        }
        catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
      fetchAllProducts()
    }, [selectedColor, selectedSize, debouncedSearchTerm[0]])



  return (
    <div>
      Product
    </div>
  )
}
