// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Button } from "@/components/ui/button"

// export default function CartPage() {
//   const [cart, setCart] = useState<CartItem[]>([])

//   useEffect(() => {
//     // Load cart from localStorage when the component mounts
//     const savedCart = localStorage.getItem('cart')
//     if (savedCart) {
//       // setCart(JSON.parse(savedCart))
//     }
//   }, [])

//   useEffect(() => {
//     // Save cart to localStorage whenever it changes
//     localStorage.setItem('cart', JSON.stringify(cart))
//   }, [cart])

// interface CartItem {
//     name: string;
//     price: number;
// }

// const removeFromCart = (index: number) => {
//     const newCart: CartItem[] = [...cart]
//     newCart.splice(index, 1)
//     setCart(newCart)
// }

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price, 0)
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map((item, index) => (
//             <div key={index} className="flex justify-between items-center border-b py-2">
//               <div>
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-gray-600">${item.price.toFixed(2)}</p>
//               </div>
//               <Button variant="destructive" onClick={() => removeFromCart(index)}>
//                 Remove
//               </Button>
//             </div>
//           ))}
//           <div className="mt-4">
//             <p className="text-xl font-bold">Total: Rs{getTotalPrice().toFixed()}</p>
//           </div>
//           <Link href="/placeorder">
//             <Button className="mt-4">Proceed to Checkout</Button>
//           </Link>
//         </>
//       )}
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function PlaceOrderPage() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    // Load cart from localStorage when the component mounts
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handlePlaceOrder = () => {
    alert("Order Placed Successfully!")
    // After placing the order, you may want to clear the cart
    localStorage.removeItem('cart')
    setCart([])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Rs{item.price} x {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: Rs{getTotalPrice().toFixed()}</p>
          </div>
          <Link href ="/place-order">
            <Button className="mt-4" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}
