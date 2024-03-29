import {Outlet} from "react-router-dom";
import Navbar from "../component/Navbar/Navbar.jsx";

const RootLayout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default RootLayout;