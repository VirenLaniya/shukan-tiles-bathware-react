
//#region React Router Imports
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
//#endregion

//#region MUI Imports
import { ThemeProvider } from '@mui/material/styles'
//#endregion

//#region Component Imports
import Layout from './components/layout/Layout'
// Pages
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import Contact from "./components/pages/Contact";
//#endregion

//#region Style Imports
import theme from './Theme'
import './App.css'
//#endregion

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/about", element: <About />},
      { path: "/product", element: <Product />},
      { path: "/contact", element: <Contact />}
    ]
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
