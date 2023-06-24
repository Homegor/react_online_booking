import React from "react"

const Contacts = () => {
  return (
    <section id='contact'>
      <div className='full contact'>
        <div className='contact__container mw'>
          <div className='contact__left-right left-right'>
            <div className='contact__left'>
              <div className='reference'>
                <ul>
                  <li className='reference__title title'>
                    <h1>Контакты</h1>
                  </li>
                  <li className='reference__street'>
                    <p>Томск, проспект Ленина, дом 13</p>
                  </li>
                  <li className='reference__phone'>
                    <a
                      href='tel: +74996861762'
                      onClick='phone_number();return false'
                    >
                      8 (499) 686-17-62
                    </a>
                  </li>
                  <li className='reference__email politic'>
                    <a
                      href='mailto:info@more-krasoty.ru'
                      onClick='mail_too();return false'
                    >
                      info@more-krasoty.ru
                    </a>
                  </li>
                </ul>
                <div className='reference__social'>
                  <p className='reference__subtitle'>
                    Мы в социальных сетях
                  </p>
                  <ul className='reference__social-all'>
                    <li className='reference__social-icon'>
                      <a
                        onClick='href_social();return false'
                        href='#'
                      >
                        <img
                          src='images/dest/vk.png'
                          alt='vk'
                        />
                      </a>
                    </li>
                    <li className='reference__social-icon'>
                      <a
                        onClick='href_social();return false'
                        href='#'
                      >
                        <img
                          src='images/dest/inst.png'
                          alt='inst'
                        />
                      </a>
                    </li>
                    <li className='reference__social-icon'>
                      <a
                        onClick='href_social();return false'
                        href='#'
                      >
                        <img
                          src='images/dest/yt.png'
                          alt='yt'
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='contact__right'>
              <div className='form'>
                <div className='form__text'>
                  <p className='form__title'>
                    Быстрая запись
                  </p>
                  <p className='form__subtitle'>
                    Наш менеджер перезвонит в течение
                    нескольких
                    <br /> минут, уточнит подробности и
                    согласует время.
                  </p>
                </div>
                <form
                  className='form__action'
                  action='#'
                  target='_blank'
                >
                  <label>
                    <input
                      className='form__name'
                      type='text'
                      name='firstname'
                      placeholder='Ваше имя'
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      className='form__phone'
                      type='tel'
                      value=''
                      name='phone'
                      placeholder='Ваш номер'
                    />
                  </label>
                  <br />
                  <button
                    className='btn form__button'
                    onClick='href_link();return false'
                  >
                    Записаться
                  </button>
                  <p className='form__politic'>
                    Нажимая на кнопку вы соглашаетесь с{" "}
                    <a
                      className='form__politic-text politic'
                      href='doc/opd.pdf'
                      target='_blank'
                    >
                      обработкой
                      <br /> персональных данных
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
