import React from "react"
import Vk from "./socialIcons/vk"
import Inst from "./socialIcons/inst"
import YouTube from "./socialIcons/youtube"

const Social = () => {
  return (
    <>
      <ul className='hero__social-center'>
        <li>
          <Vk />
        </li>
        <li>
          <Inst />
        </li>
        <li>
          <YouTube />
        </li>
      </ul>
    </>
  )
}

export default Social
