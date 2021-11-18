import { useState } from 'react'
import OrderForm from '../components/OrderForm'
import OrderResume from '../components/OrderResume'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { createPaymentSession } from '../services/api'

function Order () {
  const { state: { cart, total } } = useCart()
  const { state: { user } } = useAuth()
  console.log(JSON.stringify(user))

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  })

  const handlePayment = async (e) => {
    // Pour éviter une comportement par défaut
    e.preventDefault()
    const result = await createPaymentSession(cart, formData)
    // console.log(JSON.stringify(result))
    window.location = result.url
  }

  return (
    <div>
      <OrderResume cart={cart} total={total} />
      <OrderForm data={formData} onChange={setFormData} />
      <button onClick={handlePayment} disabled={cart.length < 1}>
        Commander maintenant
      </button>
    </div>
  )
}

export default Order
