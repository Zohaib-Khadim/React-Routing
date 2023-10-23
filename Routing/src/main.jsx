import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import Use from './components/UseParams/UseParams'
// const router=createBrowserRouter([
//   {
//     path: "/",
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>

//       },{
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="useParams/:userId" element={<Use/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
