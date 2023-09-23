import React, { useState } from "react"

import "./style/style.scss"
import { CheckBoxServices } from "../../../../common/form/checkBox"

const ServicesBookingForm = () => {
  const [service, setService] = useState({
    haircut: false,
    cosmetology: false,
    manicureAndPedicure: false,
    makeup: false,
    eyebrowsAndEyelashes: false,
    massage: false
  })

  const handleChange = (target) => {
    setService((prevState) => ({ ...prevState, [target.name]: target.value }))
    console.log(target)
  }
  return (
    <>
      <h1>Все услуги</h1>
      <hr />
      <div className='fli d-flex flex-wrap justify-content-center'>
        <CheckBoxServices
          name={"Маникюр и Педикюр"}
          id={"myCheckbox1"}
          htmlfor={"myCheckbox1"}
          src={
            "https://makeup.ru/storage/articles/29947/bAd0Y2d4LOhr7kHIe0Unl3YDTlFgMhrq.jpg"
          }
          value={service.manicureAndPedicure}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Маникюр и педикюр</p>
        </CheckBoxServices>
        <CheckBoxServices
          name={"Стрижка и укладка"}
          id={"myCheckbox2"}
          htmlfor={"myCheckbox2"}
          src={
            "https://makeup.ru/storage/articles/280349/conversions/fnz1nV3URLrigcfBlRBfiF3B3in4SvwxZoIJoT2A-preview_vertical_full.jpg"
          }
          value={service.haircut}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Стрижка и укладка</p>
        </CheckBoxServices>
        <CheckBoxServices
          name={"Косметология"}
          id={"myCheckbox3"}
          htmlfor={"myCheckbox3"}
          src={
            "https://kosmo-dom.ru/wa-data/public/blog/data/mainpic/post-31-image.jpg"
          }
          value={service.cosmetology}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Косметология</p>
        </CheckBoxServices>
        <CheckBoxServices
          name={"Макияж"}
          id={"myCheckbox4"}
          htmlfor={"myCheckbox4"}
          src={
            "https://mymanikuroff.ru/upload/iblock/346/3469d69295eef72489a8d818fa5b1631.jpg"
          }
          value={service.makeup}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Макияж</p>
        </CheckBoxServices>
        <CheckBoxServices
          name={"Брови и ресницы"}
          id={"myCheckbox5"}
          htmlfor={"myCheckbox5"}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcJAj_ZIAxOLfZ2FfW8QSTh4LqfZWQ93-fw&usqp=CAU"
          }
          value={service.eyebrowsAndEyelashes}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Брови и ресницы</p>
        </CheckBoxServices>
        <CheckBoxServices
          name={"Массаж"}
          id={"myCheckbox6"}
          htmlfor={"myCheckbox6"}
          src={
            "https://static.insales-cdn.com/files/1/1429/9897365/original/%D0%9C%D0%B0%D1%81%D1%81%D0%B0%D0%B6-%D0%BB%D0%B8%D1%86%D0%B0-%D0%B2%D1%81%D0%B5_-%D1%87%D1%82%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%BE-%D0%BD%D0%B5%D0%BC-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-890.jpg"
          }
          value={service.massage}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Массаж</p>
        </CheckBoxServices>
      </div>
    </>
  )
}

export default ServicesBookingForm
