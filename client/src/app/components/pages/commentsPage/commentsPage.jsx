import React, { useEffect } from "react"

import { orderBy } from "lodash"
import Loader from "../../common/loader/loader"
import AddCommentsForm from "../../common/comments/addCommentsForm"
import CommentList from "../../common/comments/commentList"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  createComment,
  getComments,
  getCommentsLoadingStatus,
  loadCommentsList,
  removeComment
} from "../../../store/slices/commentsSlice"

const CommentsPage = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const isLoading = useSelector(getCommentsLoadingStatus())
  const comments = useSelector(getComments())

  useEffect(() => {
    dispatch(loadCommentsList(userId))
  }, [userId])

  const handleSubmit = (data) => {
    dispatch(createComment({ ...data, pageId: userId }))
  }
  const handleRemoveComment = (id) => {
    dispatch(removeComment(id))
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
