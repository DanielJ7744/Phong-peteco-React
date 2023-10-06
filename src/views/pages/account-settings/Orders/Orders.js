import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "./account-store.scss"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button
} from "reactstrap"
import {
  Truck,
  Unlock,
  ThumbsUp,
  Star,
  Briefcase,
  Archive,
  Lock
} from "react-feather"
import moment from "moment"

import {
  getAllAdresses,
  getAllOrders,
  getWishlist,
  getAllReviewsCounter
} from "../../../apps/ecommerce/store/actions"

const Orders = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.ecommerce)
  const [loadMore, setLoadMore] = useState(false)

  useEffect(() => {
    dispatch(getAllOrders())
    dispatch(getAllAdresses())
    dispatch(getWishlist())
    dispatch(getAllReviewsCounter())
  }, [])

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="11">
          <Card>
            <CardHeader>
              <CardTitle className="title-0">Orders</CardTitle>
              <h6 className="show-all" style={{ cursor: 'pointer' }} onClick={() => setLoadMore(!loadMore)}>Show all</h6>
            </CardHeader>
            <hr />
            <CardBody>
              {store.orders.data !== undefined ? (
                <>
                  {store.orders.data.map((order, index) => {
                    const now = order.created_at
                    const formattedDate = moment(now).format("Do-MMM-Y, HH:mm A")
                    if (index < 3 || loadMore === true) {
                      return (
                        <Fragment>
                          <Row>
                            <Col xs="12" sm="8" lg="8" xl="8" md="8">
                              <div className="orders-sub-div">
                                <p className="orders-title">
                                  Order # {order.uid} - {order.status}
                                </p>
                                <p className="orders-invoice">
                                  Invoiced on:{" "}
                                  <span style={{ fontWeight: "normal" }}>
                                    {formattedDate}
                                  </span>
                                </p>
                                <p className="orders-total">
                                  Total:{" "}
                                  <span style={{ fontWeight: "normal" }}>
                                    {order.total_products_cost} Lei
                                  </span>{" "}
                                </p>
                              </div>
                            </Col>
                            <Col xs="12" sm="4" lg="4" xl="4" md="4">
                              <div className="orders-btn">
                                {/* 0440ccd3af6e must be {orderId} */}
                                <Link to={`/account/store/orders/${order.uid}/details`}>
                                  <Button.Ripple color="primary">
                                    Order Details
                                  </Button.Ripple>
                                </Link>
                              </div>
                            </Col>
                          </Row>
                          <hr />
                        </Fragment>
                      )
                    }
                  })}
                </>
              ) : (
                ""
              )}
         </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="11">
          <Card>
            <CardHeader>
              <CardTitle className="title-0">Address</CardTitle>
              <Link to="/account/store/addresses">
                <h6 className="show-all">Show all</h6>
              </Link>
            </CardHeader>
            <hr />
            <CardBody>
              <Row>
                <Col xs="12" xm="12" lg="4" xl="4" md="4">
                  <div className="numbers-card-div">
                    <div>
                      <p className="numbers-card-title">Delivery address</p>
                      <p className="numbers-card-no">4</p>
                    </div>
                    <Truck size={33} />
                  </div>
                </Col>

                <Col xs="12" xm="12" lg="4" xl="4" md="4">
                  <div className="numbers-card-div">
                    <div>
                      <p className="numbers-card-title">Company addresses</p>
                      <p className="numbers-card-no">0</p>
                    </div>
                    <Briefcase size={33} />
                  </div>
                </Col>

                <Col xs="12" xm="12" lg="4" xl="4" md="4">
                  <div className="numbers-card-div">
                    <div>
                      <p className="numbers-card-title">NGO addresses</p>
                      <p className="numbers-card-no">0</p>
                    </div>
                    <ThumbsUp size={33} />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="11">
          <Card>
            <CardHeader>
              <CardTitle className="title-0">Wishlists</CardTitle>
              <Link to="/account/store/wishlists">
                <h6 className="show-all">Show all</h6>
              </Link>
            </CardHeader>
            <hr />
            <CardBody>
              <Row>
                <Col xs="12" xm="12" lg="4" xl="4" md="4">
                  <div className="numbers-card-div">
                    <div>
                      <p className="numbers-card-title">Active wish lists</p>
                      <p className="numbers-card-no">4</p>
                    </div>
                    <Archive size={33} />
                  </div>
                </Col>

                <Col xs="12" xm="12" lg="4" xl="4" md="4">
                  <div className="numbers-card-div">
                    <div>
                      <p className="numbers-card-title">Private wish lists</p>
                      <p className="numbers-card-no">4</p>
                    </div>
                    <Lock size={33} />
                  </div>
                </Col>

                <Col xs="12" xm="12" lg="4" xl="4" md="4">
                  <div className="numbers-card-div">
                    <div>
                      <p className="numbers-card-title">Public wish lists</p>
                      <p className="numbers-card-no">0</p>
                    </div>
                    <Unlock size={33} />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="11">
          <Card>
            <CardHeader>
              <CardTitle className="title-0">Reviews</CardTitle>
              <h6 className="show-all">Show all</h6>
            </CardHeader>
            <hr />
            <CardBody>
              <Row>
                <Col xs="12" xm="12" lg="6" xl="6" md="6">
                  <div className="numbers-card-div">
                    <div>
                      <p className="numbers-card-title">Total reviews</p>
                      <p className="numbers-card-no">0</p>
                    </div>
                    <Star size={33} />
                  </div>
                </Col>

                <Col xs="12" xm="12" lg="6" xl="6" md="6">
                  <div className="numbers-card-div">
                    <div>
                      <p className="numbers-card-title">Useful reviews</p>
                      <p className="numbers-card-no">0</p>
                    </div>
                    <Star size={33} />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Orders
