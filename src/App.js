import React from "react"
import Header from "./components/ui/Header"
import About from "./components/ui/About"
import Benefit from "./components/ui/Benefit"
import Services from "./components/ui/style/Services"
import Prise from "./components/ui/Prise"
import Masters from "./components/ui/Masters"
import Gallery from "./components/ui/Gallery"
import Brands from "./components/ui/Brands"
import Contacts from "./components/ui/Contacts"
import Footer from "./components/ui/Footer"

function App() {
  return (
    <div className={"wrapper"}>
      <Header />
      <About />
      <Benefit />
      <Services />
      <Prise />
      <Masters />
      <Gallery />
      <Brands />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
