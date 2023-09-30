import React, { useEffect } from "react"
import AddCommentsForm from "../../../common/comments/addCommentsForm"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  createComment,
  getCommentsById,
  getCommentsLoadingStatus,
  loadCommentsList,
  removeComment
} from "../../../../store/slices/commentsSlice"
import { orderBy } from "lodash"
import { CommentList } from "../../../common/comments"
import Loader from "../../../common/loader/loader"

const CommentsUserList = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCommentsList(userId))
  }, [userId])
  const isLoading = useSelector(getCommentsLoadingStatus())
  const comments = useSelector(getCommentsById())

  const handleSubmit = (data) => {
    dispatch(createComment({ ...data, pageId: userId }))
  }
  const handleRemoveComment = (id) => {
    dispatch(removeComment(id))
  }
  const sortedComments = orderBy(comments, ["created_at"], ["desc"])
  return (
    <>
      <div className={"m-4"}>
        <AddCommentsForm onSubmit={handleSubmit} />
      </div>
      {sortedComments.length > 0 && (
        <>
          <hr />
          <div className='m-4'>
            <h2>Comments</h2>
            <hr />
            {!isLoading ? (
              <CommentList
                comments={sortedComments}
                onRemove={handleRemoveComment}
              />
            ) : (
              <Loader />
            )}
          </div>
        </>
      )}
    </>
  )
}

export default CommentsUserList
