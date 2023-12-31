import { createAction, createSlice } from "@reduxjs/toolkit"
import commentService from "../../services/comment.service"

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    commentsRequested: (state) => {
      state.isLoading = true
    },
    commentsReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    commentsRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    commentsCreated: (state, action) => {
      state.entities.push(action.payload)
    },
    commentRemoved: (state, action) => {
      state.entities = state.entities.filter((c) => c._id !== action.payload)
    }
  }
})

const { reducer: commentsReducer, actions } = commentsSlice
const {
  commentsRequested,
  commentsReceived,
  commentsRequestFiled,
  commentsCreated,
  commentRemoved
} = actions

const addCommentRequested = createAction("comments/addCommentRequested")
const removeCommentRequested = createAction("comments/removeCommentRequested")

export const loadCommentsList = (userId) => async (dispatch) => {
  dispatch(commentsRequested())
  try {
    const { content } = await commentService.getComments(userId)
    dispatch(commentsReceived(content))
  } catch (error) {
    dispatch(commentsRequestFiled(error.message))
  }
}
export const createComment = (payload) => async (dispatch) => {
  dispatch(addCommentRequested())
  try {
    const { content } = await commentService.createComments(payload)
    dispatch(commentsCreated(content))
  } catch (error) {
    dispatch(commentsRequestFiled(error.message))
  }
}
export const removeComment = (commentId) => async (dispatch) => {
  dispatch(removeCommentRequested())
  try {
    const { content } = await commentService.removeComments(commentId)
    if (!content) {
      dispatch(commentRemoved(commentId))
    }
  } catch (error) {
    dispatch(commentsRequestFiled(error.message))
  }
}

export const getComments = () => (state) => state.comments.entities

export const getCommentsById = (userId) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((c) => c._id === userId)
  }
}
export const getCommentsLoadingStatus = () => (state) =>
  state.comments.isLoading
export default commentsReducer
