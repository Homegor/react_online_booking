import React from "react"
import Vk from "./vk"
import Inst from "./inst"
import YouTube from "./youtube"

const Index = () => {
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

export default Index
