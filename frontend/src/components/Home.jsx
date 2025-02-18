import { useEffect, useState } from 'react';
import ProductsList from './products/ProductsList';
import { axiosRequest } from '../helper/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../index.css';
import { useDebounce } from 'use-debounce';
import Alert from './layouts/Alert';
import Spinner from './layouts/Spinner';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  // Fetch products when filters change
  const fetchAllProducts = async () => {
    setMessage('');
    setLoading(true);
    try {
      const response = await axiosRequest.get('products/filter', {
        params: {
          color: selectedColor,
          size: selectedSize,
          searchTerm: debouncedSearchTerm,
          min_price: minPrice,
          max_price: maxPrice,
        },
      });

      if (response.data.data.length > 0) {
        setProducts(response.data.data);
        setColors(response.data.colors);
        setSizes(response.data.sizes);
      } else {
        setMessage('No Product Found');
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts(); // Call the function here when filters change
  }, [selectedColor, selectedSize, debouncedSearchTerm, minPrice, maxPrice]);

  return (
    <div className="row my-5">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="row">
              {/* Color Filter */}
              <div className="col-md-4 mb-2">
                <span className="fw-bold">Filter by color:</span>
                <select
                  className="form-select"
                  value={selectedColor}
                  onChange={e => setSelectedColor(e.target.value)}
                  disabled={selectedSize || searchTerm}
                >
                  <option value="">All Colors</option>
                  {colors.map(color => (
                    <option key={color.id} value={color.id}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size Filter */}
              <div className="col-md-4 mb-2">
                <span className="fw-bold">Filter by size:</span>
                <select
                  className="form-select"
                  value={selectedSize}
                  onChange={e => setSelectedSize(e.target.value)}
                  disabled={selectedColor || searchTerm}
                >
                  <option value="">All Sizes</option>
                  {sizes.map(size => (
                    <option key={size.id} value={size.id}>
                      {size.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Box */}
              <div className="col-md-4 mb-2">
                <span className="fw-bold">Search:</span>
                <input
                  type="search"
                  className="form-control"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  disabled={selectedColor || selectedSize}
                />
              </div>

              {/* Min Price */}
              <div className="col-md-6 mb-2">
                <span className="fw-bold">Min Price:</span>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                />
              </div>

              {/* Max Price */}
              <div className="col-md-6 mb-2">
                <span className="fw-bold">Max Price:</span>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                />
              </div>

              {/* Apply Filters Button */}
              <div className="col-md-12 text-center mt-3">
                <button
                  className="btn btn-primary"
                  onClick={fetchAllProducts}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Apply Filters'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Messages & Product List */}
        {message ? (
          <Alert type="primary" content={message} />
        ) : loading ? (
          <Spinner />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </div>
  );
}
