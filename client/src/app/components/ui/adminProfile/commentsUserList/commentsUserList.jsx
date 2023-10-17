import React, { useEffect } from "react"
import AddCommentsForm from "../../../common/comments/addCommentsForm"
import { useDispatch, useSelector } from "react-redux"
import {
  createComment,
  getComments,
  getCommentsLoadingStatus,
  loadCommentsList,
  removeComment
} from "../../../../store/slices/commentsSlice"
import { useParams } from "react-router-dom"
import { getCurrentUserId } from "../../../../store/slices/userSlice"
import Loader from "../../../common/loader/loader"

const CommentsUserList = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const comments = useSelector(getComments())
  const isLoading = useSelector(getCommentsLoadingStatus())
  const user = useSelector(getCurrentUserId())

  useEffect(() => {
    dispatch(loadCommentsList(userId))
  }, [userId])

  const handleSubmit = (data) => {
    dispatch(createComment({ ...data }))
  }
  const handleRemoveComment = (id) => {
    dispatch(removeComment(id))
  }
  return (
    <>
      <div className={"m-4"}>
        <AddCommentsForm onSubmit={handleSubmit} />
      </div>
      <hr />
      <p className={"text-center"}>Выши комментарии</p>
      {!isLoading ? (
        <>
          {comments.map((comments) => (
            <div key={comments._id}>
              {comments.userId === user && (
                <>
                  <p>{comments.content}</p>
                  <button
                    onClick={() => handleRemoveComment(comments._id)}
                    className={"btn"}
                  >
                    Удалить
                  </button>
                </>
              )}
            </div>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}
export default CommentsUserList
