import React from 'react'
import Home from '../pages/Home/Home/Home'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import About from '../pages/About/About'
import Support from '../components/Support'
import Work from '../components/Work'

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
      },
      {
        path:'/support',
        element:<Support></Support>
      },
      {
        path:'/work',
        element:<Work></Work>
      }
        ]
    }
])