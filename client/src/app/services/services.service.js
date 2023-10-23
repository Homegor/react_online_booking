import httpService from "./http.service"

const servicesEndPoint = "services/"

const servicesService = {
  getServices: async () => {
    const { data } = await httpService.get(servicesEndPoint)
    console.log(data)
    return data
  },
  createServices: async (payload) => {
    const { data } = await httpService.post(servicesEndPoint, payload)
    return data
  },
  removeServices: async (serviceId) => {
    const { data } = await httpService.patch(servicesEndPoint + serviceId)
    return data
  }
}

export default servicesService
