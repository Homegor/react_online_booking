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
import Loader from "../../../common/loader/loader"
import { getCurrentUserId } from "../../../../store/slices/userSlice"

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
      <h2 className={"text-center m-3"}>Выши комментарии</h2>
      {!isLoading ? (
        <>
          {comments.map((comments) => (
            <div key={comments._id}>
              {comments.userId === user && (
                <div className={"commentUserProfile"}>
                  <p>{comments.content}</p>
                  <button
                    onClick={() => handleRemoveComment(comments._id)}
                    className={"btn"}
                  >
                    Удалить
                  </button>
                </div>
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
