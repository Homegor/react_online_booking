import React, { useEffect } from "react"

import { orderBy } from "lodash"
import Loader from "../../common/loader/loader"
import { CommentList } from "../../common/comments"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  getComments,
  getCommentsLoadingStatus,
  loadCommentsList
} from "../../../store/slices/commentsSlice"

const CommentsPage = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const isLoading = useSelector(getCommentsLoadingStatus())
  const comments = useSelector(getComments())

  useEffect(() => {
    dispatch(loadCommentsList(userId))
  }, [userId])

  const sortedComments = orderBy(comments, ["created_at"], ["desc"])

  return (
    <>
      <div className={"container"}>
        <h2>Спасибо за отзывы</h2>
        {sortedComments.length > 0 && (
          <div className='card mb-3 mt-4'>
            <div className='card-body '>
              {!isLoading ? (
                <CommentList comments={sortedComments} />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CommentsPage
