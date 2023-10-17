import httpService from "./http.service"

const mastersEndPoint = "masters/"

const mastersService = {
  getMasters: async () => {
    const { data } = await httpService.get(mastersEndPoint)
    return data
  }
}

export default mastersService
