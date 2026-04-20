import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IncidentForm from './Pages/IncidentForm';
import ReporterDash from './Pages/ReporterDash';
import AdminDash from './Pages/AdminDash';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home'
import Error from './Pages/Error'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Tos from './Pages/Tos';
import Privacy from './Pages/Privacy';
import Faqs from './Pages/Faqs';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "*",
//     element: <Error />,
//   },
//   {
//     path: "/incident",
//     element: <IncidentForm />,
//   },
//   {
//     path: "/rdashboard",
//     element: <ReporterDash />,
//   },
//   {
//     path: "/adminpanel",
//     element: <AdminDash />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/tos",
//     element: <Tos />,
//   },
//   {
//     path: "/privacy",
//     element: <Privacy />,
//   },
//   {
//     path: "/faqs",
//     element: <Faqs />,
//   }
// ])


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/incident" element={<IncidentForm />} />
        <Route path="/rdashboard" element={<ReporterDash />} />
        <Route path="/adminpanel" element={<AdminDash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App