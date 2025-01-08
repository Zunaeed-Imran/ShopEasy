import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { axiosRequest } from "../../helper/config"
import Alert from "../layouts/Alert"
import Spinner from "../layouts/Spinner"

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
          if (error?.response?.status === 404) {
            setError('The Product you are looking for does not exist.')
          }
          console.log(error)
          setLoading(false)
        }
      }
      fetchProductBySlug()
    }, [slug])



  return (
    <div>
      {
        error ?
          <Alert content={error} type={'danger'} />
        :
        loading ?
            <Spinner />    
        :
        <>
          <div className="row g-0">
            <div className="col-md-4 p-2">
              <div>
                Product images
              </div>    
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="text-dark">{product?.name}</h5>
                  <h6 className="badge bg-danger p-2">${product?.price}</h6>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}
