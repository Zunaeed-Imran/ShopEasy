import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import { axiosRequest, getConfig } from '../../helper/config'
import { useSelector } from 'react-redux'

export default function Stripe() {
  const stripePromise = loadStripe(
    'pk_test_51QjbU2Ko3om26zX4zcJsKLBzuXZ1oeQG9d63vGubOmhlJ1C2NP5TG1x5q1pyAn6aBXCen66GwXNzWxitCTHqEdaK00vFUUjxxr'
  );
  const [clientSecret, setClientSecret] = useState('')
  const {token} = useSelector(state => state.user)
  const {cartItems} = useSelector(state => state.cart)

  useEffect(() => {
    fetchClientSecret()
  }, [])

  const fetchClientSecret = async () => {
    try {
      const response = await axiosRequest.post('pay/order', {
        cartItems,
      }, getConfig(token));
      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
