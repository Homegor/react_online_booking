import React, { useState } from "react"

import { orderBy } from "lodash"
import AddCommentsForm from "../../ui/form/comments/addCommentsForm"
import CommentList from "../../ui/form/comments/commentList"
import Loader from "../../common/loader/loader"

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
        <div className='card mb-3'>
          <div className='card-body '>
            <h2>Comments</h2>
            <hr />
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
