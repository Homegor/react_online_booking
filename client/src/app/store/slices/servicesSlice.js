import { createAction, createSlice } from "@reduxjs/toolkit"
import servicesService from "../../services/services.service"

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    servicesRequested: (state) => {
      state.isLoading = true
    },
    servicesReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    servicesRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    servicesCreated: (state, action) => {
      state.entities.push(action.payload)
    },
    servicesRemoved: (state, action) => {
      state.entities = state.entities.filter((s) => s._id !== action.payload)
    }
  }
})

const { reducer: servicesReducer, actions } = servicesSlice
const {
  servicesRequested,
  servicesReceived,
  servicesRequestFiled,
  servicesCreated,
  servicesRemoved
} = actions

const addServicesRequested = createAction("services/addServicesRequested")
const removeServicesRequested = createAction("services/removeServicesRequested")

export const loadServicesList = () => async (dispatch) => {
  dispatch(servicesRequested())
  try {
    const { content } = await servicesService.getServices()
    dispatch(servicesReceived(content))
  } catch (error) {
    dispatch(servicesRequestFiled(error.message))
  }
}
export const createServices = (payload) => async (dispatch) => {
  dispatch(addServicesRequested())
  try {
    const { content } = await servicesService.createServices(payload)
    dispatch(servicesCreated(content))
  } catch (error) {
    dispatch(servicesRequestFiled(error.message))
  }
}
export const removedServices = (servicesId) => async (dispatch) => {
  dispatch(removeServicesRequested())
  try {
    const { content } = await servicesService.removeServices(servicesId)
    dispatch(servicesRemoved(content))
  } catch (error) {
    dispatch(servicesRequestFiled(error.message))
  }
}
export const getServicesList = () => (state) => state.services.entities
export const getServicesLoadingStatus = () => (state) =>
  state.services.isLoading

export default servicesReducer
