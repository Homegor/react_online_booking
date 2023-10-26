import React, { useEffect, useState } from "react"
import { getUsersList } from "../../../../store/slices/userSlice"
import { useSelector } from "react-redux"
import Loader from "../../../common/loader/loader"

const AllUsersList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  const userList = useSelector(getUsersList())

  useEffect(() => {
    if (userList && !data) {
      setData({
        ...userList
      })
    }
  }, [userList, data])
  useEffect(() => {
    if (data && isLoading) {
      setIsLoading(false)
    }
  }, [data])

  return (
    <div>
      <h2>Наши посетители</h2>
      {!isLoading ? (
        <div className='users'>
          {userList.map((u) => (
            <div key={u._id} className={"users__info"}>
              <p>
                Имя: <span className={"users__userInfo"}>{u.name}</span>
              </p>
              <p>
                Email: <span className={"users__userInfo"}>{u.email}</span>
              </p>
              <p>
                Телефон: <span className={"users__userInfo"}>{u.phone}</span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default AllUsersList
