import httpService from "./http.service"

const commentEndPoint = "comments/"

const commentService = {
  createComments: async (payload) => {
    const { data } = await httpService.post(commentEndPoint, payload)
    console.log(data)
    return data
  },
  getComments: async (pageId) => {
    const { data } = await httpService.get(commentEndPoint, {
      params: {
        orderBy: "pageId",
        equalTo: `"${pageId}"`
      }
    })
    return data
  },
  removeComments: async (commentId) => {
    const { data } = await httpService.delete(commentEndPoint + commentId)
    return data
  }
}

export default commentService
