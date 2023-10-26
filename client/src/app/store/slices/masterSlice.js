import { createSlice } from "@reduxjs/toolkit"
import mastersService from "../../services/masters.service"

const mastersSlice = createSlice({
  name: "masters",
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    mastersRequested: (state) => {
      state.isLoading = true
    },
    mastersReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    mastersRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: mastersReducer, actions } = mastersSlice
const { mastersRequested, mastersReceived, mastersRequestFiled } = actions

export const loadMastersList = (id) => async (dispatch, getState) => {
  dispatch(mastersRequested())
  try {
    const { content } = await mastersService.getMasters(id)
    dispatch(mastersReceived(content))
  } catch (error) {
    dispatch(mastersRequestFiled(error.message))
  }
}

export const getMasters = () => (state) => state.masters.entities
export const getMastersLoading = () => (state) => state.masters.isLoading
export const getMastersById = (id) => (state) => {
  if (state.masters.entities) {
    return state.masters.entities.find((c) => c._id === id)
  }
}

export default mastersReducer
