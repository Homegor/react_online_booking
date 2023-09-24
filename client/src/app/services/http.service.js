import axios from "axios"
// import { toast } from "react-toastify"
import configFile from "../config.json"
// import localStorageService from "./localStorage.service"

const http = axios.create({
  baseURL: configFile.apiEndPoint
})

http.interceptors.request.use()

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch
}

export default httpService
