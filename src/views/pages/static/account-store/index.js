import { Fragment } from "react"
import Breadcrumbs from "@components/breadcrumbs"
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

const AccountStore = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="AccountStore"
        breadCrumbParent="Pages"
        breadCrumbActive="AccountStore"
      />
      <Row className="justify-content-center">
        <Col xs="11">
          <Card>
            <CardHeader>
              <CardTitle className='title-0'>Orders</CardTitle>
              <h6 className="show-all">Show all</h6>
            </CardHeader>
            <hr />
            <CardBody>
              <Row>
                <Col xs="12" sm="8" lg="8" xl="8" md="8">
                  <div className="orders-sub-div">
                    <p className="orders-title">
                      Order # 0440ccd3af6e - Canceled
                    </p>
                    <p className="orders-invoice">
                      Invoiced on:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        31-Mar-2021, 16:15
                      </span>
                    </p>
                    <p className="orders-total">
                      Total:{" "}
                      <span style={{ fontWeight: "normal" }}>29 Lei</span>{" "}
                    </p>
                  </div>
                </Col>
                <Col xs="12" sm="4" lg="4" xl="4" md="4">
                  <div
                    className="orders-btn">
                    <Button.Ripple color="primary">Order details</Button.Ripple>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs="12" sm="8" lg="8" xl="8" md="8">
                  <div className="orders-sub-div">
                    <p className="orders-title">
                      Order # 0440ccd3af6e - Canceled
                    </p>
                    <p className="orders-invoice">
                      Invoiced on:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        31-Mar-2021, 16:15
                      </span>
                    </p>
                    <p className="orders-total">
                      Total:{" "}
                      <span style={{ fontWeight: "normal" }}>29 Lei</span>{" "}
                    </p>
                  </div>
                </Col>
                <Col xs="12" sm="4" lg="4" xl="4" md="4">
                  <div
                    className="orders-btn">
                    <Button.Ripple color="primary">Order details</Button.Ripple>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs="12" sm="8" lg="8" xl="8" md="8">
                  <div className="orders-sub-div">
                    <p className="orders-title">
                    Order # f89580ea7553 - New
                    </p>
                    <p className="orders-invoice">
                      Invoiced on:{" "}
                      <span style={{ fontWeight: "normal" }}>
                      20-Nov-2018, 23:11
                      </span>
                    </p>
                    <p className="orders-total">
                      Total:{" "}
                      <span style={{ fontWeight: "normal" }}>2,743.31 Lei</span>{" "}
                    </p>
                  </div>
                </Col>
                <Col xs="12" sm="4" lg="4" xl="4" md="4">
                  <div
                    className="orders-btn">
                    <Button.Ripple color="primary">Order details</Button.Ripple>
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
              <CardTitle className='title-0'>Address</CardTitle>
              <h6 className="show-all">Show all</h6>
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
              <CardTitle className='title-0'>Wish lists</CardTitle>
              <h6 className="show-all">Show all</h6>
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
              <CardTitle className='title-0'>Reviews</CardTitle>
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

export default AccountStore
