import React from "react"
import { useSelector } from "react-redux"
import { getServicesLoadingStatus } from "../../../store/slices/servicesSlice"
import Loader from "../loader/loader"
import Accordion from "react-bootstrap/Accordion"
import {
  FilterBrows,
  FilterCosmetology,
  FilterHaircut,
  FilterMakeup,
  FilterMassage,
  FilterNail
} from "../../ui/filter/adminPage"

const PriseAdminList = () => {
  const isLoading = useSelector(getServicesLoadingStatus())

  return (
    <>
      {!isLoading ? (
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Стрижка и укладка</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                <FilterHaircut />
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='1'>
            <Accordion.Header>Косметология</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                <FilterCosmetology />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Маникюр и педикюр</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                <FilterNail />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Макияж</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                <FilterMakeup />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>Брови и ресницы</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                <FilterBrows />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='5'>
            <Accordion.Header>Массаж</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                <FilterMassage />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default PriseAdminList
