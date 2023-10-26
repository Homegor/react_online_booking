import React from "react"
import {
  AboutUs,
  Benefit,
  Brands,
  ContactUs,
  Gallery,
  Header,
  Masters,
  Prise,
  Services
} from "../../ui/main"
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <div className={"headerImg"}>
        <Header />
      </div>
      <main>
        <AboutUs />
        <Benefit />
        <Services />
        <Prise />
        <Masters />
        <Gallery />
        <Brands />
        <ContactUs />
      </main>
      <Outlet />
    </>
  )
}

export default HomePage
