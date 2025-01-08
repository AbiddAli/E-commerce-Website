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
//       setCart(JSON.parse(savedCart))
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
//             <p className="text-xl font-bold">Total: ${getTotalPrice().toFixed()}</p>
//           </div>
//           <Link href="/checkout">
//             <Button className="mt-4">Proceed to Checkout</Button>
//           </Link>
//         </>
//       )}
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Button } from "@/components/ui/button"

// interface CartItem {
//   id: number;
//   name: string;
//   price: string;
//   quantity: number;
// }

// export default function CartPage() {
//   const [cart, setCart] = useState<CartItem[]>([])

//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart')
//     if (savedCart) {
//       setCart(JSON.parse(savedCart))
//     }
//   }, [])

//   const removeFromCart = (id: number) => {
//     setCart(currentCart => currentCart.filter(item => item.id !== id))
//   }

//   const updateQuantity = (id: number, newQuantity: number) => {
//     setCart(currentCart => 
//       currentCart.map(item => 
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     )
//   }

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart))
//   }, [cart])

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => {
//       const price = parseFloat(item.price.replace('Rs ', ''))
//       return total + price * item.quantity
//     }, 0)
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div key={item.id} className="flex justify-between items-center border-b py-2">
//               <div>
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-gray-600">{item.price} x {item.quantity}</p>
//               </div>
//               <div>
//                 <Button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
//                 <span className="mx-2">{item.quantity}</span>
//                 <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
//                 <Button onClick={() => removeFromCart(item.id)} variant="destructive" className="ml-2">Remove</Button>
//               </div>
//             </div>
//           ))}
//           <div className="mt-4">
//             <p className="text-xl font-bold">Total: Rs {getTotalPrice().toFixed(2)}</p>
//           </div>
//           <Link href="/checkout">
//             <Button className="mt-4">Proceed to Checkout</Button>
//           </Link>
//         </>
//       )}
//       <Link href="/Menu">
//         <Button className="mt-4">Back to Menu</Button>
//       </Link>
//     </div>
//   )
// }


// CartPage.tsx

'use client'

import { useCart } from '../context/CartContext'  // Adjust the path based on your file structure
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { cart, removeFromCart, getTotalPrice, addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Rs {item.price} x {item.quantity}</p>
              </div>
              <div>
                <Button onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, quantity: item.quantity - 1 })} disabled={item.quantity <= 1}>-</Button>
                <span className="mx-2">{item.quantity}</span>
                <Button onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, quantity: item.quantity + 1 })}>+</Button>
                <Button onClick={() => removeFromCart(item.id)} variant="destructive" className="ml-2">Remove</Button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: Rs {getTotalPrice().toFixed(2)}</p>
          </div>
          <Link href="/checkout">
            <Button className="mt-4">Proceed to Checkout</Button>
          </Link>
        </>
      )}
      <Link href="/Menu">
        <Button className="mt-4">Back to Menu</Button>
      </Link>
    </div>
  )
}
