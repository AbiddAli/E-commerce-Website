
import React from "react";
import Link from "next/link";



export default function Navbar() {
  return (
    <nav className="p-6 m-0 bg-[url(/image/navy.jpg)] bg-cover bg-center ">
      <ul className=" flex space-x-8  text-black justify-center font-bold text-xl">
      <li>
          <Link href="/" className="hover:text-red-600 text-yellow-100" >Home</Link>
        </li>
        <li>
          <Link href="/About" className="hover:text-red-600 text-yellow-100">About</Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-red-600 text-yellow-100">Contact</Link>                    
        </li>
        <li>
          <Link href="/Menu" className="hover:text-red-600 text-yellow-100">Menu</Link>
        </li>
        
      </ul> 
    </nav>
  );
}
