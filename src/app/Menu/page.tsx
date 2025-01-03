import React from "react";
import Image from "next/image";

// Create an array of menu items
const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    price: 'Rs 500',
    image: "/image/2.jpg",
  },
  {
    id: 2,
    name: "Cheese Balls",
    price: 'Rs 400',
    image: "/image/6.jpg",
  },
  {
    id: 3,
    name: "Chicken Dynamite",
    price: 'Rs 700',
    image: "/image/3.jpg",
  },
  {
    id: 4,
    name: "Mutton Mandi",
    price: 'Rs 5000',
    image: "/image/4.jpg",
  },
  {
    id: 5,
    name: "Chinese Fried Rice",
    price: 'Rs 800',
    image: "/image/5jpg.jpg",
  },
  {
    id: 6,
    name: "Chicken Biryani",
    price:'Rs 500',
    image: "/image/7jpg.jpg",
  },
  {
    id: 7,
    name: "Kabab Karahi",
    price: 'Rs 2000',
    image: "/image/8.jpg",
  },
  {
    id: 8,
    name: "Mutton Karahi",
    price:'Rs 2500 Half-Kg',
    image: "/image/9.jpg",
  },
  {
    id: 9,
    name: "BBQ-Platter",
    price: 'Rs 15000',
    image: "/image/10.jpg",
  },
  {
    id: 10,
    name: "Cheese Cake",
    price: 'Rs 500',
    image: "/image/11.jpg",
  },
  {
    id: 11,
    name: "Ice-Cream",
    price: 'Rs 400',
    image: "/image/Ice-cream.jpg",
  },
  {
    id: 12,
    name: "Cold-drink",
    price:  'Rs 100',
    image: "/image/12.jpg",
  },
];

export default function MenuPage() {
  return (
    <div className="bg-gray-300 max-h-screen px-4 py-12">
      {/* Menu Section */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Map through the menuItems array */}
        {menuItems.map((item) => (
          <div key={item.id} className="rounded-lg shadow-lg bg-white">
            <Image
              src={item.image}
              alt={item.name}
              width={600}
              height={100}
              className="  object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-lg font-semibold text-gray-800 mt-3">{item.price}</p>
              {/* Order Now Button */}
              <button className="w-28 mt-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
