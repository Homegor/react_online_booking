import React from "react"
import play from "../../style/images/play.png"
import video from "../../style/images/video.png"

const AboutUs = () => {
  return (
    <section id='about'>
      <div className='about mw'>
        <div className='about__information'>
          <div className='about__container'>
            <h1 className='about__title title'>О салоне</h1>
            <p className='about__subtitle'>
              Мир красоты - это уютный салон в самом центре <br /> города. Здесь
              работают профессиональные <br /> визажисты, стилисты и мастера
              татуажа
            </p>
            <p className='about__subtitle-button'>
              Красота и хороший уход никогда не выходят из моды. Мы <br />{" "}
              приглашаем Вас в место, где гармония обретает форму,
              <br />а внешность становится отражением внутреннего мира. Новая{" "}
              <br /> жизнь начинается с небольших изменений. Мы помогаем <br />{" "}
              нашим клиентам воплотить их индивидуальность во внешнем <br />{" "}
              облике. Мы создаем стиль – вместе с Вами и для Вас.
            </p>
          </div>
          <div className='video'>
            <div className='video__blackout'>
              <img className='video__img' src={video} alt='video' />
              <a className='video__link link'>
                <img src={play} alt='123' />
                Короткое видео о нас
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
