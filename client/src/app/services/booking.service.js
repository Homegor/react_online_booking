import httpService from "./http.service"

const bookingEndPoint = "booking/"

const bookingService = {
  getBooking: async () => {
    const { data } = await httpService.get(bookingEndPoint)
    return data
  },
  createBooking: async (payload) => {
    const { data } = await httpService.post(bookingEndPoint, payload)
    console.log(payload)
    return data
  },
  removeBooking: async (bookingId) => {
    const { data } = await httpService.delete(bookingEndPoint + bookingId)
    return data
  }
}

export default bookingService
