import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/Home.jsx'
import DashBoard from './components/DashBoard.jsx'
import BookDetails from './components/BookDetails.jsx'
import ListedBooks from './components/ListedBooks.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: "/dashBoard",
        element: <DashBoard></DashBoard>
      },
      // {
      //   path: "/pageRead",
      //   element: <DashBoard></DashBoard>
      // },
      // {
      //   path: "/dashBoard",
      //   element: <DashBoard></DashBoard>
      // },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
