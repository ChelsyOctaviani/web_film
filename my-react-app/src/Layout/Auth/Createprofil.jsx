import React from 'react';

const EditProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-500">NOBAR</h1>

          {/* Navigation with Dropdowns */}
          <nav className="flex space-x-4 relative">
            {/* Series Dropdown */}
            <div className="relative group">
              <a href="#" className="hover:text-red-500">Series</a>
              <div className="absolute hidden group-hover:block bg-gray-800 text-white p-2 mt-1 space-y-2">
                <a href="#" className="block hover:text-red-500">Action</a>
                <a href="#" className="block hover:text-red-500">Drama</a>
                <a href="#" className="block hover:text-red-500">Comedy</a>
              </div>
            </div>

            {/* Genre Dropdown */}
            <div className="relative group">
              <a href="#" className="hover:text-red-500">Genre</a>
              <div className="absolute hidden group-hover:block bg-gray-800 text-white p-2 mt-1 space-y-2">
                <a href="#" className="block hover:text-red-500">Horror</a>
                <a href="#" className="block hover:text-red-500">Romance</a>
                <a href="#" className="block hover:text-red-500">Sci-Fi</a>
              </div>
            </div>
          </nav>

          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-40 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500"
            />

            {/* Profile Icon */}
            <div className="relative">
              <img
                src="image/profile.jpeg"
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              {/* Dropdown Profile */}
              <div className="absolute hidden group-hover:block bg-gray-800 text-white p-2 mt-1 right-0 space-y-2">
                <a href="editProfile.html" className="block hover:text-red-500">Profile</a>
                <a href="#" className="block hover:text-red-500">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Edit Profile Form */}
      <div className="max-w-2xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src="image/profile.jpeg"
            alt="Profile Image"
          />
          <h3 className="mb-2 text-xl font-medium text-gray-800">Edit Your Profile</h3>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="username" className="text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
            <input
              type="text"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="language" className="text-sm font-medium text-gray-600">Language</label>
            <select id="language" className="w-full p-2 border border-gray-300 rounded mt-1">
              <option>English</option>
              <option>Other Languages</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
