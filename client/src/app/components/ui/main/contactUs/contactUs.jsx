import React from "react"
// import Vk from "../../components/common/socialIcons/vk"
// import Inst from "../../components/common/socialIcons/inst"
// import YouTube from "../../components/common/socialIcons/youtube"
// import FormBooking from "../formBooking"
import PropTypes from "prop-types"
import Icons from "../../../common/icons"
import vk from "../../../../assets/img/vk.png"
import yt from "../../../../assets/img/yt.png"
import inst from "../../../../assets/img/inst.png"
import FormBooking from "../../form/bookingForm"

const ContactFooter = () => {
  return (
    <section className={"mw full"}>
      <div className='full contact'>
        <div className='contact__container mw'>
          <div className='contact__left-right left-right'>
            <div className='contact__left'>
              <div className='reference'>
                <ul>
                  {/* <li className="reference__title title"><h1>Контакты</h1></li>
                  <li className="reference__street"><p >Томск, проспект Ленина, дом 13</p></li>
                  <li className="reference__phone"><a href="tel: +74996861762" onclick="phone_number();return false">8 (499) 686-17-62</a></li>
                  <li className="reference__email politic"><a href="mailto:info@more-krasoty.ru" onclick="mail_too();return false">info@more-krasoty.ru</a></li> */}
                  <li className='reference__title title'>
                    <h1>Контакты</h1>
                  </li>
                  <li className='reference__street'>
                    <p>Томск, проспект Ленина, дом 13</p>
                  </li>
                  <li className='reference__phone'>
                    <a href='tel: +74996861762'>8 (499) 686-17-62</a>
                  </li>
                  <li className='reference__email politic'>
                    <a href='mailto:info@more-krasoty.ru'>
                      info@more-krasoty.ru
                    </a>
                  </li>
                </ul>
                <div className='reference__social'>
                  <p className='reference__subtitle'>Мы в социальных сетях</p>
                  <ul className='reference__social-all'>
                    <li className='reference__social-icon'>
                      <Icons srcImg={vk} url={"#"} altName={"VK"} />
                    </li>
                    <li className='reference__social-icon'>
                      <Icons srcImg={yt} url={"#"} altName={"YouTube"} />
                    </li>
                    <li className='reference__social-icon'>
                      <Icons srcImg={inst} url={"#"} altName={"Instagram"} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='contact__right'>
              <div className='form'>
                <FormBooking />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ContactFooter.propTypes = {
  onChange: PropTypes.func
}
export default ContactFooter
