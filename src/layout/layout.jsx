

import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx"
function Layout() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main className=" p-10">
        <Outlet />
    </main>

    <Footer/>

    </>
  )
}

export default Layout