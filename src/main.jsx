import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './components/Home'
import Error404 from './components/Error404'
import About from './pages/About'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>} errorElement={<Error404/>} >
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider >
    <RouterProvider router={router}/>
    </UserContextProvider>
  </React.StrictMode>
)
