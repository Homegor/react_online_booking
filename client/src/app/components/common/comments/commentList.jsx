import React from "react"
import PropTypes from "prop-types"
import { Comment } from "./index"

const CommentList = ({ comments }) => {
  return comments.map((comment) => <Comment key={comment._id} {...comment} />)
}

CommentList.propTypes = {
  comments: PropTypes.array
}

export default CommentList
