import { Fragment, useEffect, useState } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./account-store-orders-details.scss"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap"
import {
  getOrderById,
  sendOrderMessage
} from "../../../../apps/ecommerce/store/actions"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import moment from "moment"
import { toast } from "react-toastify"
import { X, Check } from "react-feather"
import Avatar from "@components/avatar"

const OrdersDetails = () => {
  const { order_id } = useParams()
  const history = useHistory()
  const [order, setOrder] = useState()
  const [name, setName] = useState()
  const [supplier, setSupplier] = useState()
  const [formattedDate, setFormattedDate] = useState()
  const [supplierName, setSupplierName] = useState()
  const dispatch = useDispatch()
  const store = useSelector((state) => state.ecommerce)

  const [message, setMessage] = useState()

  const id = {}
  useEffect(() => {
    dispatch(getOrderById(order_id))
  }, [])

  const SuccessToast = () => (
    <Fragment>
      <div className="toastify-header">
        <div className="title-wrapper">
          <Avatar size="sm" color="success" icon={<Check size={12} />} />
          <h6 className="toast-title">Success!</h6>
        </div>
        <small className="text-muted"></small>
      </div>
      <div className="toastify-body">
        <span role="img" aria-label="toast-text">
          👋 Message Sent
        </span>
      </div>
    </Fragment>
  )

  const ErrorToast = () => (
    <Fragment>
      <div className="toastify-header">
        <div className="title-wrapper">
          <Avatar size="sm" color="danger" icon={<X size={12} />} />
          <h6 className="toast-title">Error!</h6>
        </div>
      </div>
      <div className="toastify-body">
        <span role="img" aria-label="toast-text">
          Details are Missing
        </span>
      </div>
    </Fragment>
  )

  const notifySuccess = () => toast.success(<SuccessToast />, { hideProgressBar: true })
  const notifyError = () => toast.error(<ErrorToast />, { hideProgressBar: true })

  useEffect(() => {
    if (store.orderDetail.data) {
      const data = store.orderDetail.data
      setOrder(data)
      const now = data.created_at
      const date = moment(now).format("Do-MMM-Y, HH:mm A")
      setFormattedDate(date)
      setSupplier(data.suppliers)
      if (store.orderDetail.data.invoice_address) {
        setName(`${data.invoice_address.contact_first_name} ${data.invoice_address.contact_last_name}`)
      }
    }
  })

  const renderProducts = () => {
    if (order) {
      const mainData = Object.entries(order.suppliers)
      return Object.keys(mainData).map((key) => {
        return mainData[key].map((value) => {
          if (value.items !== undefined) {
            return (
              <Row className="justify-content-center">
                <Col xs="12" sm="12" md="12" lg="10" xl="10">
                  <Card>
                    <CardHeader>
                      <CardTitle id="order-titles">
                        Products of the {value.slug}
                      </CardTitle>
                      <h4 className="new-h">{order.status}</h4>
                    </CardHeader>
                    <hr />
                    <CardBody>
                      <>
                        {value.items.map((item) => {
                          return (
                            <>
                              <div className="order-product-main-div">
                                <div className="order-product-info">
                                  <img
                                    className="product-img"
                                    src={item.product_image_url}
                                  />
                                  <p>{item.product_name}</p>
                                </div>

                                <div className="order-product-price">
                                  <p>{item.product_price} Lei</p>
                                  <span>{item.quantity} piece</span>
                                </div>
                              </div>
                              <hr />
                            </>
                          )
                        })}
                      </>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )
          }
        })
      })
    }
  }

  const renderSelectVendor = () => {
    if (order) {
      const mainData = Object.entries(order.suppliers)
      return (
        <Col xs="6" sm="6" md="6" lg="6" xl="6">
          <FormGroup>
            <Label for="select-default">TO:</Label>
            <Input
              type="select"
              name="select"
              id="select-default"
              onChange={(e) => setSupplierName(e.target.value)}
            >
              <option></option>
              {Object.keys(mainData).map((key) => {
                return mainData[key].map((value) => {
                  if (value.name !== undefined) {
                    return <option>{value.name}</option>
                  }
                })
              })}
            </Input>
          </FormGroup>
        </Col>
      )
    }
  }

  const renderSupplierId = () => {
    if (order) {
      const mainData = Object.entries(order.suppliers)
      return Object.keys(mainData).map((key) => {
        return mainData[key].map((value) => {
          if (value.name === supplierName) {
            id.value = mainData[key][0]
          }
        })
      })
    }
  }

  useEffect(() => {
    renderSupplierId()
  }, [supplierName])

  const handleSendMessage = () => {
    if (
      message !== undefined &&
      id !== undefined &&
      supplierName !== undefined
    ) {
      dispatch(sendOrderMessage(order.uid, id.value, name, message))
      return notifySuccess()
    } else {
      console.log(message, id.value, supplierName, name)
      return notifyError()
    }
  }

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbParent="Pages"
        breadCrumbActive="AccountStoreOrdersDetails"
      />
      {order && (
        <Fragment>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="12" lg="10" xl="10">
              <Card>
                <CardBody>
                  <div className="payment-card">
                    <p>Date of placement: {formattedDate}</p>
                    <p>
                      Total amount of products: {order.total_products_cost} Lei
                    </p>
                    <p>Delivery cost: {order.delivery_cost} Lei</p>
                    <p className="payment-amount">
                      Payment amount: {supplier.total_supplier_cost} Lei
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="12" lg="10" xl="10">
              <Row>
                {order.delivery_address && (
                  <Col xs="12" sm="12" md="12" lg="4" xl="4">
                    <Card>
                      <CardHeader>
                        <CardTitle id="address-card-title">
                          {" "}
                          Delivery address{" "}
                        </CardTitle>
                      </CardHeader>
                      <hr />
                      <CardBody>
                        <div className="address-section1">
                          <p>
                            For: {order.delivery_address.contact_first_name}{" "}
                            {order.delivery_address.contact_last_name}{" "}
                          </p>
                          <p>Phone: {order.delivery_address.contact_phone}</p>
                          <p className="main-heading">Address:</p>
                          <p>
                            {order.delivery_address.address}{" "}
                            {order.delivery_address.city_name},{" "}
                            {order.delivery_address.region_name},{" "}
                            {order.delivery_address.country_name}
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                )}
                {order.invoice_address && (
                  <Col xs="12" sm="12" md="12" lg="4" xl="4">
                    <Card>
                      <CardHeader>
                        <CardTitle id="address-card-title">
                          {" "}
                          Billing address{" "}
                        </CardTitle>
                      </CardHeader>
                      <hr />
                      <CardBody>
                        <div className="address-section1">
                          <p>
                            For: {order.invoice_address.contact_first_name}{" "}
                            {order.invoice_address.contact_last_name}{" "}
                          </p>
                          <p>Phone: {order.invoice_address.contact_phone}</p>
                          <p className="main-heading">Address:</p>
                          <p>
                            {order.invoice_address.address},{" "}
                            {order.invoice_address.city_name},{" "}
                            {order.invoice_address.region_name},{" "}
                            {order.invoice_address.country_name}
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                )}
                <Col xs="12" sm="12" md="12" lg="4" xl="4">
                  <Card>
                    <CardHeader>
                      <CardTitle id="address-card-title">
                        {" "}
                        Method of payment{" "}
                      </CardTitle>
                    </CardHeader>
                    <hr />
                    <CardBody>
                      <p>{order.payment_method.name}</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Fragment>
      )}

      {renderProducts()}
      {order && order.invoice_address && (
        <Row className="justify-content-center">
          <Col xs="12" sm="12" md="12" lg="10" xl="10">
            <Card>
              <CardHeader>
                <CardTitle id="order-titles">Messaging Order</CardTitle>
              </CardHeader>
              <hr />
              <CardBody>
                <Row>
                  <Col
                    xs="12"
                    sm="12"
                    md="6"
                    lg="6"
                    xl="6"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <p>
                      From:{" "}
                      <span className="from-name">
                        {order.invoice_address.contact_first_name}{" "}
                        {order.invoice_address.contact_last_name}{" "}
                      </span>
                    </p>
                  </Col>
                  {renderSelectVendor()}
                </Row>
                <hr />
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label for="select-default">Message:</Label>
                      <Input
                        type="textarea"
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <div className="button-group">
                  <Button.Ripple
                    id="cancel-btn"
                    color="primary"
                    outline
                    onClick={() => history.goBack()}
                  >
                    Back
                  </Button.Ripple>

                  <Button.Ripple
                    color="primary"
                    onClick={() => handleSendMessage()}
                  >
                    Send
                  </Button.Ripple>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Fragment>
  )
}
export default OrdersDetails
