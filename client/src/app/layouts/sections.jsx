import React from "react"
import {
  AboutUs,
  Benefit,
  Services,
  Prise,
  Masters,
  Gallery,
  Brands,
  ContactFooter
} from "./main"

const Sections = () => {
  return (
    <>
      <main>
        <section>
          <AboutUs />
        </section>
        <section>
          <Benefit />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Prise />
        </section>
        <section className={"mw full"}>
          <Masters />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
          <Brands />
        </section>
        <section className={"mw full"}>
          <ContactFooter />
        </section>
      </main>
    </>
  )
}

export default Sections
