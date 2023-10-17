import { createAction, createSlice } from "@reduxjs/toolkit"
import isDate from "../../utils/isDate"
import bookingService from "../../services/booking.service"

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    entities: null,
    isLoading: true,
    createBookingLoading: false,
    error: null,
    dataLoaded: false
  },
  reducers: {
    bookingsRequested: (state) => {
      state.isLoading = true
    },
    bookingsReceived: (state, action) => {
      state.entities = action.payload
      state.dataLoaded = Date.now()
      state.isLoading = false
    },
    bookingsRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    bookingCreateRequested: (state) => {
      state.error = null
      state.createBookingLoading = true
    },
    bookingCreateRequestedFailed: (state, action) => {
      state.error = action.payload
      state.createBookingLoading = false
    },
    bookingCreated: (state, action) => {
      state.entities.push(action.payload)
      state.error = null
      state.createBookingLoading = false
    },
    bookingRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (booking) => booking._id !== action.payload
      )
      state.error = null
    }
  }
})

const { reducer: bookingReducer, actions } = bookingSlice
const {
  bookingsRequested,
  bookingsReceived,
  bookingsRequestFailed,
  bookingCreateRequested,
  bookingCreateRequestedFailed,
  bookingCreated,
  bookingRemoved
} = actions

const removeBookingRequested = createAction("booking/removeBookingRequested")

export const loadingBookingList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().booking
  if (isDate(lastFetch)) {
    dispatch(bookingsRequested())
  }
  try {
    const { content } = await bookingService.getBooking()
    dispatch(bookingsReceived(content))
  } catch (error) {
    dispatch(bookingsRequestFailed(error.message))
  }
}

export const createBooking = (payload) => async (dispatch) => {
  dispatch(bookingCreateRequested())
  try {
    const { content } = await bookingService.createBooking(payload)
    dispatch(bookingCreated(content))
    return content
  } catch (error) {
    dispatch(bookingCreateRequestedFailed(error.message))
  }
}
export const removeBooking = (id) => async (dispatch) => {
  dispatch(removeBookingRequested())
  try {
    const { content } = await bookingService.removeBooking(id)
    console.log(content)
    if (!content) {
      dispatch(bookingRemoved(id))
    }
  } catch (error) {
    dispatch(bookingsRequestFailed(error.message))
  }
}

export const getBookingList = () => (state) => state.booking.entities
export const getBookingByUserId = (userId) => (state) => {
  if (state.booking.entities) {
    return state.booking.entities.filter((b) => b.userId === userId)
  }
}
export const getIsLoggedIn = () => (state) => state.booking.isLoggedIn
export const getDataStatus = () => (state) => state.booking.dataLoaded
export const getBookingLoadingStatus = () => (state) => state.booking.isLoading

export default bookingReducer
