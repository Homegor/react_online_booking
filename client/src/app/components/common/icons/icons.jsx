import React from "react"
/* import Vk from "./vk/vk"
import Inst from "./inst/inst"
import YouTube from "./youtube/youtube" */
import PropTypes from "prop-types"

const Icons = ({ url, srcImg, altName }) => {
  /*  return (
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
  ) */
  return (
    <a href={url}>
      <img src={srcImg} alt={altName} />
    </a>
  )
}

Icons.propTypes = {
  url: PropTypes.string,
  srcImg: PropTypes.string,
  altName: PropTypes.string
}

export default Icons
