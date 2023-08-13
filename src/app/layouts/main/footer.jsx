import React from "react"

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className='footer__container mw'>
        <div className='footer__block'>
          <div className='footer__mine'>
            <ul className='footer__information'>
              <li className='footer__title'>
                <p>© 2020 «Море красоты»</p>
              </li>
              <li className='footer__politic politic'>
                <a href='' target='_blank'>
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          {/* <nav className='footer__navigation navigation'>
          <ul>
            <li className='navigation__active'>
              <a href='#'> Услуги и цены</a>
            </li>
            <li>
              <a href=''>Мастера</a>{" "}
            </li>
            <li>
              <a href=''>Наши работы</a>
            </li>
            <li>
              <a href=''>Контакты</a>
            </li>
          </ul>
        </nav> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
