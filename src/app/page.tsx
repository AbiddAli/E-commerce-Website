import React from "react";


export default function Home() {
  return (
    <div className="h-screen bg-transparent bg-[url(https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center flex items-center justify-center">
      <div className="text-center p-6 bg-yellow-100 bg-opacity-60 rounded-lg">
        <h1 className="text-6xl font-extrabold mb-4 text-black drop-shadow-lg">
          Welcome to our Restuarent!
        </h1>
        <p className="text-2xl text-black font-bold mb-8 drop-shadow-md">
        Where Flavor Meets Elegance – Welcome to Urban Spice.
        </p>
      </div>
    </div>
  );
}


