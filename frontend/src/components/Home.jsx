import { useEffect, useState } from "react"
import axios from 'axios'

export default function Home() {
  const [products, setProducts] = useState([])
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/products'
        );
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllProducts()
  }, [])

  return (
    <div>
      Home
    </div>
  )
}
