import httpService from "./http.service"

const servicesEndPoint = "services/"

const servicesService = {
  getServices: async () => {
    const { data } = await httpService.get(servicesEndPoint)
    return data
  },
  createServices: async (payload) => {
    const { data } = await httpService.post(servicesEndPoint, payload)
    return data
  },
  removeServices: async (serviceId) => {
    const { data } = await httpService.delete(servicesEndPoint + serviceId)
    return data
  }
}

export default servicesService
