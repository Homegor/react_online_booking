import React, { useState } from "react"
import AddCommentsForm from "../../common/comments/addCommentsForm"
import CommentList from "../../common/comments/commentList"
import Loader from "../../ui/loader/loader"
import { orderBy } from "lodash"

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
      <div className='card mb-2'>
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
