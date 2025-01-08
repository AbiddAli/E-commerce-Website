'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '../context/CartContext'
import { Button } from "@/components/ui/button"

export default function PlaceOrderPage() {
  const router = useRouter()
  const { cart, getTotalPrice, clearCart } = useCart()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    console.log('Order placed:', { name, address, cart, total: getTotalPrice() })
    clearCart()
    router.push('/order-confirmation')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Place Your Order</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>Rs {(item.price * item.quantity).toFixed()}</span>
            </div>
          ))}
          <div className="font-bold mt-2">
            Total: Rs{getTotalPrice().toFixed()}
          </div>
        </div>
        <Button type="submit">Place Order</Button>
      </form>
    </div>
  )
}

