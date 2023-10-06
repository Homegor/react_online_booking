import { createSlice } from "@reduxjs/toolkit"
import mastersService from "../../services/masters.service"

const masterSlice = createSlice({
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

const { reducer: mastersReducer, actions } = masterSlice
const { mastersRequested, mastersReceived, mastersRequestFiled } = actions

export const loadMastersList = () => async (dispatch) => {
  dispatch(mastersRequested())
  try {
    const { content } = await mastersService.getMasters()
    dispatch(mastersReceived(content))
  } catch (error) {
    dispatch(mastersRequestFiled(error.message))
  }
}

export const getMasters = () => (state) => state.masters.entities
export const getMastersLoadingStatus = () => (state) => state.masters.isLoading
export const getMastersById = (id) => (state) => {
  if (state.masters.entities) {
    return state.masters.entities.find((m) => m._id === id)
  }
}

export default mastersReducer
