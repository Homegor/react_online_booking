import React from "react"
import PropTypes from "prop-types"

const TabsContent = () => {
  const items = [
    {
      id: "fhjadlkrf4243r",
      title: "Заголовок_1",
      content: "Контент_1",
      prise: 1200
    },
    {
      id: "lasjdagfhs487",
      title: "Заголовок_2",
      content: "Контент_2",
      prise: 1500
    },
    {
      id: "fgdfht46u46",
      title: "Заголовок_3",
      content: "Контент_3",
      prise: 1700
    },
    {
      id: "hvcjhgfky467467",
      title: "Заголовок_4",
      content: "Контент_4",
      prise: 1230
    },
    {
      id: "sdfsdgcvnjlh6467",
      title: "Заголовок_5",
      content: "Контент_5",
      prise: 1560
    }
  ]
  return (
    <>
      {items.map((i) => (
        <div className='name__box' key={i._id}>
          <div className='name__left'>
            <p className='name__title'>{i.title}</p>
            <p className='name__subtitle'>{i.content}</p>
          </div>
          <div className='name__right'>
            <p className='name__price'>{i.prise} &#x20bd;</p>
          </div>
        </div>
      ))}
    </>
  )
}

TabsContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  prise: PropTypes.number
}

export default TabsContent
