import React from 'react';

export default function Login() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/images/Background.jpg')` }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <form className="bg-black bg-opacity-70 p-8 rounded-lg text-white w-80">
            <h2 className="text-2xl mb-6 text-center">Login</h2>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-4 bg-transparent bg-opacity-50 border-b border-gray-600 focus:outline-none focus:border-pink-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 mb-4 bg-transparent bg-opacity-50 border-b border-gray-600 focus:outline-none focus:border-pink-500"
            />
            <button
              type="submit"
              className="w-full p-3 mb-4 bg-pink-600 rounded-md hover:bg-pink-700 transition-colors"
            >
              Login
            </button>
            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <a href="register.html" className="text-pink-500">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}


// Penjelasan mengenai background yang tidak full
/* Penambahan Kelas h-screen: Ini untuk memastikan bahwa kontainer background memiliki tinggi penuh sesuai dengan viewport.
Penambahan Kelas bg-cover: Agar gambar background menutupi seluruh area secara proporsional.
Mempertahankan Kelas bg-center: Agar gambar background tetap berada di tengah. */