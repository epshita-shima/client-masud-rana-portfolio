import React from 'react'
import Home from '../pages/Home/Home/Home'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import About from '../pages/About/About'

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      }
        ]
    }
])