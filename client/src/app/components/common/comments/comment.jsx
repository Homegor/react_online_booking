import React from "react"
import PropTypes from "prop-types"
import { getUserById } from "../../../store/slices/userSlice"
import { useSelector } from "react-redux"
import Loader from "../loader/loader"

const Comment = ({ content, userId }) => {
  const user = useSelector(getUserById(userId))

  return (
    <>
      {user ? (
        <div className='bg-light card-body mb-3'>
          <div className='row'>
            <div className='col'>
              <div className='d-flex align-items-center'>
                <div className={"p-2"}>
                  <img
                    src={user.image}
                    className='rounded-circle shadow-1-strong mb-2'
                    alt='avatar'
                    width='65'
                    height='65'
                  />
                  <p className='mb-1 text-center'>{user && user.name}</p>
                </div>
                <div className='flex-grow-1 flex-shrink-1'>
                  <div className='p-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='small m-4 d-flex justify-content-center'>
                        {content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

Comment.propTypes = {
  content: PropTypes.string,
  edited_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userId: PropTypes.string,
  onRemove: PropTypes.func,
  _id: PropTypes.string
}

export default Comment
