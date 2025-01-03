import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center px-4 p-12 bg-[#f2f2df] min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-8 text-justify max-w-screen p-4">
        <span className="text-highlight font-bold">Welcome to Urban Spice! </span>

        We believe that food is more than just sustenance—it’s an experience that brings people together, tells a story, and creates lasting memories. Nestled in the heart of Karachi, we pride ourselves on offering a unique dining experience that combines exceptional flavors, warm hospitality, and an inviting atmosphere.

        Our menu is thoughtfully crafted to celebrate the finest ingredients, inspired by the vibrant flavors of Asian cuisine. Each dish is prepared with love and care, ensuring every bite delights your senses. Whether a family celebration or a casual gathering, we aim to make your time with us truly special.

        Our team of passionate chefs and dedicated staff are committed to excellence in every detail, from sourcing the freshest produce to providing impeccable service. At Urban Spice, we’re not just serving meals—we are creating experiences to savor.

        Come join us and discover why <span className="text-highlight font-bold">Urban Spice</span> is more than just a restaurant—it’s a destination for food lovers, storytellers, and community builders.<br />

        <span className="font-bold">Your table is waiting!</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 shadow-2xl">
          <Image
            src="/image/family-space.jpg"
            alt="family-space"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/image/upper-portion.jpg"
            alt="upper-portion"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/image/Sea-sight.jpg"
            alt="Sea Sight"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
