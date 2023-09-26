import React, { useState } from "react"

import { orderBy } from "lodash"
import Loader from "../../common/loader/loader"
import AddCommentsForm from "../../common/comments/addCommentsForm"
import CommentList from "../../common/comments/commentList"

const CommentsPage = () => {
  const [comments] = useState()
  const [isLoading] = useState(true)

  const handleSubmit = (data) => {
    console.log(data)
  }
  const handleRemoveComment = (id) => {
    console.log(id)
  }

  const sortedComments = orderBy(comments, ["created_at"], ["desc"])

  return (
    <>
      <div className='card mb-2 hero'>
        <div className='card-body '>
          <AddCommentsForm onSubmit={handleSubmit} />
        </div>
      </div>
      {sortedComments.length > 0 && (
        <div className='card mb-3 hero mt-0'>
          <div className='card-body '>
            <h2>Спасибо за отзывы</h2>
            {isLoading ? (
              <CommentList
                comments={sortedComments}
                onRemove={handleRemoveComment}
              />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default CommentsPage
