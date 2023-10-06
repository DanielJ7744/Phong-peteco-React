import { Fragment } from "react"
import { Home } from "react-feather"
import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  CardHeader,
  CardTitle,
  FormGroup,
  Label,
  Input
} from "reactstrap"

const OrderDetails = props => {

  const { stepper } = props

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col>
          <h3 className="heading">Order Details</h3>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
              <CardTitle className="card1-heading">Total order</CardTitle>
            </CardHeader>
            <hr />
            <CardBody>
              <Row>
                <Col xs="12" sm="12" lg="6" xl="6" md="6">
                  <div className="total-orders-main-div">
                    <div
                      className="total-orders-sub-div"
                      style={{
                        marginBottom: "26px"
                      }}
                    >
                      <p className="order-subtotal"> Subtotal </p>
                      <p className="order-subtotal-price">14 Lei</p>
                    </div>

                    <div className="total-orders-sub-div">
                      <p className="order-subtotal">
                        {" "}
                        Calculate the cost of delivery:{" "}
                      </p>
                      <p className="order-subtotal-price">15 Lei</p>
                    </div>
                  </div>
                </Col>

                <Col xs="12" sm="12" lg="6" xl="6" md="6">
                  <div className="total-orders">
                    <p className="total-orders-price">Total order: 29 Lei</p>
                    <Button.Ripple color="primary" className="total-orders-btn">
                      Place the order
                    </Button.Ripple>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
              <CardTitle className="card1-heading">Delivery address</CardTitle>
            </CardHeader>
            <hr />
            <CardBody>
              <Row>
                <Col xs="12" sm="12" lg="6" xl="6" md="6">
                  <div className="delivery-address-main-div">
                    <Home size={33} style={{ marginRight: "20px" }} />
                    <div className="delivery-address-sub-div">
                      <p className="address-lines">Alin Stan - 0721012653</p>
                      <p className="address-lines">
                        Nord City Tower, Bd. Pipera 1 / VII, Et. 9
                      </p>
                      <p className="address-lines">Ilfov, Volunteers</p>
                    </div>
                  </div>
                </Col>

                <Col xs="12" sm="12" lg="6" xl="6" md="6">
                  <div className="total-orders">
                    <Button.Ripple color="primary">
                      Change address
                    </Button.Ripple>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
              <CardTitle className="card1-heading">Billing address</CardTitle>
            </CardHeader>
            <hr />
            <CardBody>
              <Row>
                <Col xs="12" sm="12" lg="6" xl="6" md="6">
                  <div className="billing-address-main-div">
                    <Home size={33} style={{ marginRight: "20px" }} />
                    <div className="billing-address-sub-div">
                      <p className="address-lines">Alin Stan - 0721012653</p>
                      <p className="address-lines">
                        Nord City Tower, Bd. Pipera 1 / VII, Et. 9
                      </p>
                      <p className="address-lines">Ilfov, Volunteers</p>
                    </div>
                  </div>
                </Col>

                <Col xs="12" sm="12" lg="6" xl="6" md="6">
                  <div className="total-orders">
                    <Button.Ripple color="primary">
                      Change address
                    </Button.Ripple>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
              <CardTitle className="card1-heading">Payment method</CardTitle>
            </CardHeader>
            <hr />
            <CardBody>
              <Row>
                <Col xs="12" sm="12" lg="12" xl="12" md="12">
                  <div className="payment-method-main-div">
                    <FormGroup check inline>
                      <Label check>
                        <Input type="radio" name="ex1" defaultChecked />{" "}
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          Courier refunds
                        </span>
                      </Label>
                    </FormGroup>
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

export default OrderDetails
