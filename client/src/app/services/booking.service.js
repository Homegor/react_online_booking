import httpService from "./http.service"

const bookingEndPoint = "/booking"

const bookingService = {
  fetchAll: async () => {
    const { data } = await httpService.get(bookingEndPoint)
    return data
  }
}

export default bookingService
