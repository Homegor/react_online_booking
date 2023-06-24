import React from "react"

const About = () => {
  return (
    <section id='about'>
      <div className='about mw'>
        <div className='about__information'>
          <div className='about__container'>
            <h1 className='about__title title'>О салоне</h1>
            <p className='about__subtitle'>
              Мир красоты - это уютный салон в самом центре{" "}
              <br /> города. Здесь работают профессиональные{" "}
              <br /> визажисты, стилисты и мастера татуажа
            </p>
            <p className='about__subtitle-button'>
              Красота и хороший уход никогда не выходят из
              моды. Мы <br /> приглашаем Вас в место, где
              гармония обретает форму,
              <br />а внешность становится отражением
              внутреннего мира. Новая <br /> жизнь
              начинается с небольших изменений. Мы помогаем{" "}
              <br /> нашим клиентам воплотить их
              индивидуальность во внешнем <br /> облике. Мы
              создаем стиль – вместе с Вами и для Вас.
            </p>
          </div>
          <div className='video'>
            <div className='video__blackout'>
              <img
                className='video__img'
                src='images/dest/video.png'
                alt='video'
              />
              <a
                className='video__link link'
                onClick='href_video();return false'
                href='#'
              >
                <img src='images/dest/play.png' alt='123' />
                Короткое видео о нас
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
