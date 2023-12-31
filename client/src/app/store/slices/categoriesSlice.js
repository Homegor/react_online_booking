import { createSlice } from "@reduxjs/toolkit"
import categoriesService from "../../services/categories.service"

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    categoriesRequested: (state) => {
      state.isLoading = true
    },
    categoriesReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    categoriesRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: categoriesReducer, actions } = categoriesSlice
const { categoriesRequested, categoriesReceived, categoriesRequestFiled } =
  actions

export const loadCategoriesList = (id) => async (dispatch, getState) => {
  dispatch(categoriesRequested())
  try {
    const { content } = await categoriesService.getCategories(id)
    dispatch(categoriesReceived(content))
  } catch (error) {
    dispatch(categoriesRequestFiled(error.message))
  }
}

export const getCategories = () => (state) => state.categories.entities
export const getCategoriesLoading = () => (state) => state.categories.isLoading
export const getCategoriesById = (id) => (state) => {
  if (state.categories.entities) {
    return state.categories.entities.find((c) => c._id === id)
  }
}

export default categoriesReducer
