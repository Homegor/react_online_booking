import httpService from "./http.service"

const mastersEndPoint = "masters/"

const mastersService = {
  getMasters: async () => {
    const { data } = await httpService.post(mastersEndPoint)
    console.log(data)
    return data
  }
}

export default mastersService
