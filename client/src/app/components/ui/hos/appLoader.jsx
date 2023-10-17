import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList
} from "../../../store/slices/userSlice"
import { loadingBookingList } from "../../../store/slices/bookingSlice"
import { loadMastersList } from "../../../store/slices/masterSlice"
import { loadCategoriesList } from "../../../store/slices/categoriesSlice"
import Loader from "../../common/loader/loader"

const AppLoader = ({ children }) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn())
  const usersStatusLoading = useSelector(getUsersLoadingStatus())

  useEffect(() => {
    dispatch(loadUsersList())
    dispatch(loadingBookingList())
    dispatch(loadMastersList())
    dispatch(loadCategoriesList())
  }, [isLoggedIn])

  if (usersStatusLoading) return <Loader />
  return children
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default AppLoader
