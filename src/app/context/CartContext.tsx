  // 'use client'

  // import React, { createContext, useContext, useState, useEffect } from 'react'

  // type CartItem = {
  //   id: number
  //   name: string
  //   price: number
  //   quantity: number
  // }

  // type CartContextType = {
  //   cart: CartItem[]
  //   addToCart: (item: CartItem) => void
  //   removeFromCart: (id: number) => void
  //   clearCart: () => void
  //   getTotalPrice: () => number
  // }

  // const CartContext = createContext<CartContextType | undefined>(undefined)

  // export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //   const [cart, setCart] = useState<CartItem[]>([])

  //   useEffect(() => {
  //     const savedCart = localStorage.getItem('cart')
  //     if (savedCart) {
  //       setCart(JSON.parse(savedCart))
  //     }
  //   }, [])

  //   useEffect(() => {
  //     localStorage.setItem('cart', JSON.stringify(cart))
  //   }, [cart])

  //   const addToCart = (item: CartItem) => {
  //     setCart((prevCart) => {
  //       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
  //       if (existingItem) {
  //         return prevCart.map((cartItem) =>
  //           cartItem.id === item.id
  //             ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //             : cartItem
  //         )
  //       }
  //       return [...prevCart, { ...item, quantity: 1 }]
  //     })
  //   }

  //   const removeFromCart = (id: number) => {
  //     setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  //   }

  //   const clearCart = () => {
  //     setCart([])
  //   }

  //   const getTotalPrice = () => {
  //     return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  //   }

  //   return (
  //     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}>
  //       {children}
  //     </CartContext.Provider>
  //   )
  // }

  // export const useCart = () => {
  //   const context = useContext(CartContext)
  //   if (context === undefined) {
  //     throw new Error('useCart must be used within a CartProvider')
  //   }
  //   return context
  // }

// CartContext.tsx

'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}