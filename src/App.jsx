import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./assets/components/navbar/NavBar.jsx";
import Home from "./assets/components/home/Home.jsx";
import ListProducts from "./assets/components/products/ListProducts.jsx";
import Create from "./assets/components/products/Create.jsx";
import Login from "./assets/components/login/Login.jsx";
import Register from "./assets/components/login/Register.jsx";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListProductDetails from "./assets/components/products/ListProductDetails.jsx";

const navArrayLinks = [
  {
      title: "Inicio",
      to: "/",
      icon: <InboxIcon/>
  },
  {
      title: "Productos",
      to: "/listProducts",
      icon: <DraftsIcon/>
  },
  {
      title: "Crear",
      to: "/create",
      icon: <DraftsIcon/>
  },
  {
      title: "Login",
      to: "/login",
      icon: <DraftsIcon/>
  },
  {
      title: "Registrate",
      to: "/register",
      icon: <DraftsIcon/>
  },
]


export default function App() {
  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listProducts" element={<ListProducts/>}/>
        <Route path="/Detaill/:id" element={<ListProductDetails/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes> 
    </>
  );
}

