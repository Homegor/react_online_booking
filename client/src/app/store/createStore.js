import bookingReducer from "./slices/bookingSlice"
import commentsReducer from "./slices/commentsSlice"
import usersReducer from "./slices/userSlice"
import mastersReducer from "./slices/masterSlice"

const { combineReducers, configureStore } = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
  booking: bookingReducer,
  comments: commentsReducer,
  users: usersReducer,
  masters: mastersReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
