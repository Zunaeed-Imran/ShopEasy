import { useEffect, useState } from "react"
import ProductsList from "./products/ProductsList"
import { axiosRequest } from "../helper/config"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css'
import '../index.css'

export default function Home() {
  const [products, setProducts] = useState([])
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [message, setMessage] = useState('')

  const handleColorSelectBox = (e) => {
    setSelectedSize('')
    setSearchTerm('')
    setSelectedColor(e.target.value)
  }
  const handleSizeSelectBox = (e) => {
    setSelectedColor('')
    setSearchTerm('')
    setSelectedSize(e.target.value)
  }
  const clearFilters = () => {
    setSelectedColor('')
    setSelectedSize('')
  }

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        if (selectedColor) {
          const response = await axiosRequest.get(`products/${selectedColor}/color`);
          setProducts(response.data.data)
          setColors(response.data.colors)
          setSizes(response.data.sizes)
        } else if (selectedSize) {
          const response = await axiosRequest.get(
            `products/${selectedSize}/size`
          );
          setProducts(response.data.data)
          setColors(response.data.colors)
          setSizes(response.data.sizes)
        } else if (searchTerm) {
          const response = await axiosRequest.get(
            `products/${searchTerm}/size`
          );
          if (response.data.data.length > 0) {
            setProducts(response.data.data)
            setColors(response.data.colors)
            setSizes(response.data.sizes)
          } else {
            setMessage('No Product Found')
          }
        } else {
          const response = await axiosRequest.get('products');
          setProducts(response.data.data)
          setColors(response.data.colors)
          setSizes(response.data.sizes)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllProducts()
  }, [selectedColor, selectedSize, searchTerm])

  return (
    <div className="row my-5">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="row">
              <div className="col-md-4 md-2">
                <div className="mb-2">
                  <span className="fw-bold">Filter by color:</span>
                </div>
                <select
                  name="color_id"
                  id="color_id"
                  defaultValue={''}
                  onChange={e => handleColorSelectBox(e)}
                  disabled={selectedColor || searchTerm}
                  className="form-select"
                >
                  <option
                    value=""
                    disabled={!selectedColor}
                    onChange={() => clearFilters()}
                  >
                    All Colors
                  </option>
                  {colors.map(color => (
                    <option value={color.id} key={color.id}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 md-2">
                <div className="mb-2">
                  <span className="fw-bold">Filter by size:</span>
                </div>
                <select
                  name="size_id"
                  id="size_id"
                  defaultValue={''}
                  onChange={e => handleSizeSelectBox(e)}
                  disabled={selectedSize || searchTerm}
                  className="form-select"
                >
                  <option
                    value=""
                    disabled={!selectedSize}
                    onChange={() => clearFilters()}
                  >
                    All Sizes
                  </option>
                  {sizes.map(size => (
                    <option value={size.id} key={size.id}>
                      {size.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 md-2">
                <div className="mb-2">
                  <span className="fw-bold">Search:</span>
                </div>
                <form className="d-flex">
                  <input
                    type="search"
                    className="form-control me-2"
                    value={searchTerm}
                    // disabled={selectedColor || selectedSize}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        {
          message ? 
            <div className="alert alert-info">
              {message}
            </div>
            :
        <ProductsList products={products} />
        }
      </div>
    </div>
  );
}
