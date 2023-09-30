import React, { useState } from "react"
import { TabsContent } from "./index"

const Tabs = () => {
  const tabsLink = [
    {
      id: "123154sgvsgsfg",
      title: "Стрижка и укладка"
    },
    {
      id: "123154sgvsgsfgsdfwrt",
      title: "Косметология"
    },
    {
      id: "123154sgvsgsfgacxvbh",
      title: "Маникюр и педикюр"
    },
    {
      id: "123154sgvsgsfgaetr5",
      title: "Макияж"
    },
    {
      id: "fsgd534635y",
      title: "Брови и ресницы"
    },
    {
      id: "123154sgvsgsfgfdvgjh57",
      title: "Массаж"
    }
  ]
  const [isActive, setIsActive] = useState()

  const handelChange = (e) => {
    e.preventDefault()
    setIsActive(e.target)
  }
  console.log(tabsLink)
  console.log(isActive)
  console.log(handelChange)

  return (
    <>
      <nav className='tabs__navigation'>
        <ul className='tabs__container'>
          {/*          {tabsLink.map((l) => (
            <li
              key={l._id}
              onClick={handelChange}
              type={"button"}
              className={`tabs__link ${!isActive ? "active" : ""}`}
            >
              {l.title}
            </li>
          ))}*/}
        </ul>
      </nav>
      <div className='name name__active'>
        <TabsContent />
      </div>
    </>
  )
}

export default Tabs
