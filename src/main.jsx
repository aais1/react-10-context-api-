import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Hello from './components/Hello'
import Error404 from './components/Error404'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>} errorElement={<Error404/>} >
      <Route path='/hello' element={<Hello/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
