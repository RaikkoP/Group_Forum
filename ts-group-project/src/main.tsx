import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import LoginForm from './pages/Login.tsx'
import SignUpForm from './pages/Signup.tsx'
import HomePage from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <LoginForm/>
  },
  {
    path: "/register",
    element: <SignUpForm/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
