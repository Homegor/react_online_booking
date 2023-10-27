import React from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import { useSelector } from "react-redux"
import { getServicesList } from "../../../store/slices/servicesSlice"
import Loader from "../loader/loader"
import {
  FilterBrows,
  FilterCosmetology,
  FilterHaircut,
  FilterMakeup,
  FilterMassage,
  FilterNail
} from "../../ui/filter/homePage"
const PriseHomeList = () => {
  const services = useSelector(getServicesList())

  return (
    <>
      {services ? (
        <>
          <Tabs
            defaultActiveKey='nail'
            transition={false}
            id='noanim-tab-example'
            className='mb-3'
          >
            <Tab eventKey='haircut' title='Стрижка и укладка'>
              <FilterHaircut />
            </Tab>
            <Tab
              className={"tabs__container"}
              eventKey='cosmetology'
              title='Косметология'
            >
              <FilterCosmetology />
            </Tab>
            <Tab
              className={"tabs__container"}
              eventKey='nail'
              title='Маникюр и педикюр'
            >
              <FilterNail />
            </Tab>
            <Tab className={"tabs__container"} eventKey='makeup' title='Макияж'>
              <FilterMakeup />
            </Tab>
            <Tab
              className={"tabs__container"}
              eventKey='brows'
              title='Брови и ресницы'
            >
              <FilterBrows />
            </Tab>
            <Tab
              className={"tabs__container"}
              eventKey='massage'
              title='Массаж'
            >
              <FilterMassage />
            </Tab>
          </Tabs>
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default PriseHomeList
