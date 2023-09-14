import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route, createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar'
import Dashboard from './page/Dashboard';
import Login from './page/Login';
import Register from './page/Register';

function App() {

  const Layout = () => {
    return(
      <div className='flex flex-row justify-center w-full bg-gray-200'>
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

  const route = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element: <Dashboard/>,
        },

      ]
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/register',
      element: <Register/>
    },
  ])



  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}

export default App
