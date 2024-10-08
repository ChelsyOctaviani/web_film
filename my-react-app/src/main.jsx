import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HalamanAwal from './Layout/Auth/HalamanAwal'
import Login from './Layout/Auth/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from 'react'
import Register from './Layout/Auth/Register'
import Home from './Layout/Auth/Home'
import Preview from './Layout/Auth/Preview'
import Createprofil from './Layout/Auth/Createprofil'
import Genre from './Layout/Auth/Genre'
import PilihGenre from './Layout/Auth/pilihGenre'
import Action from './Layout/Auth/Action'

const router = createBrowserRouter
([
  {
    path: "/register",
    element:<Register/>,
  },
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: "/",
    element:<HalamanAwal/>,
  },
  {
    path: "/home",
    element:<Home/>,
  },
  {
    path: "/videos/preview/:original_title",
    element:<Preview/>,
  },
  {
    path: "/Create",
    element:<Createprofil/>,
  },
  {
    path: "/genre",
    element:<Genre/>
  },
  {
    path: "/genre/pilihgenre",
    element:<PilihGenre/>
  },
  {
    path: "/genre/action",
    element:<Action/>
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
