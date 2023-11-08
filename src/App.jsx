import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import IncidentForm from './Pages/IncidentForm';
import Home from './Pages/Home'
import Error from './Pages/Error'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Tos from './Pages/Tos';
import Privacy from './Pages/Privacy';
import Faqs from './Pages/Faqs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/incident",
    element: <IncidentForm />,
  },
  {
    path: "/tos",
    element: <Tos />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  }
])


function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App