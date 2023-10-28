import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { getIsLoggedIn, loadUsersList } from "../../../store/slices/userSlice"
import { loadingBookingList } from "../../../store/slices/bookingSlice"
import { loadMastersList } from "../../../store/slices/masterSlice"
import { loadCategoriesList } from "../../../store/slices/categoriesSlice"
import Loader from "../../common/loader/loader"
import {
  getServicesLoadingStatus,
  loadServicesList
} from "../../../store/slices/servicesSlice"
import { loadCommentsList } from "../../../store/slices/commentsSlice"

const AppLoader = ({ children }) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn())
  const serviceStatus = useSelector(getServicesLoadingStatus())

  useEffect(() => {
    dispatch(loadCategoriesList())
    dispatch(loadServicesList())
    dispatch(loadCommentsList())
    dispatch(loadUsersList())
    dispatch(loadMastersList())
    if (isLoggedIn) {
      dispatch(loadingBookingList())
    }
  }, [isLoggedIn])

  if (serviceStatus) return <Loader />
  return children
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default AppLoader
