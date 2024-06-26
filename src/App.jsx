
import React from "react"
import { Route,Routes } from "react-router-dom"
import Layout from "./layout/layout"
import Home from './Pages/Home'
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
function App() {

  return (
    <React.Fragment>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path="/servies" element={<Services/>}/>
        <Route path="/About" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>

      </Route>
    </Routes>
    </React.Fragment>
  )
}

export default App
