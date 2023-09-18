import React from "react"
import {
  AboutUs,
  Benefit,
  Brands,
  ContactUs,
  Footer,
  Gallery,
  Header,
  Masters,
  Prise,
  Services
} from "../../ui/main"

const HomePage = () => {
  return (
    <>
      <div className={"headerImg"}>
        <Header />
      </div>
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
          <ContactUs />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
