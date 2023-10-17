import React, { useState } from "react"
import girl from "../../../../assets/img/girl.png"
import Icons from "../../../common/icons"
import vk from "../../../../assets/img/vk.png"
import yt from "../../../../assets/img/yt.png"
import inst from "../../../../assets/img/inst.png"
import Button from "../../../common/form/button"
import Modal from "../../../common/modal"
import FastBookingForm from "../../form/bookingForm/fastBookingForm"

const Header = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <header>
        <div className='hero'>
          <div className='hero__content'>
            <p className='hero__title'>
              Создай свой образ <br /> вместе с нами
            </p>
            <p className='hero__subtitle'>Идеальный образ за 60 минут</p>
            <Button
              className={"hero__btn btn"}
              name={"Записаться онлайн"}
              onClick={() => setModalActive(true)}
            />
          </div>
          <div className='hero__media'>
            <img className='hero__girl' src={girl} alt='фото' />
          </div>
          <div className='hero__social'>
            <ul className='hero__social-center'>
              <li>
                <Icons srcImg={vk} url={"#"} altName={"VK"} />
              </li>
              <li>
                <Icons srcImg={yt} url={"#"} altName={"YouTube"} />
              </li>
              <li>
                <Icons srcImg={inst} url={"#"} altName={"Inst"} />{" "}
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Modal active={modalActive} setActive={setModalActive}>
        <FastBookingForm />
      </Modal>
    </>
  )
}

export default Header
