import { Fragment } from "react"
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

const AccountStoreOrdersDetails = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbParent="Pages"
        breadCrumbActive="AccountStoreOrdersDetails"
      />
      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12" lg="10" xl="10">
          <Card>
            <CardBody>
              <div className="payment-card">
                <p>Date of placement: 25-Mar-2021, 11:40</p>
                <p>Total amount of products: 935.92 Lei</p>
                <p>Delivery cost: 34.90 Lei</p>
                <p className="payment-amount">Payment amount: 970.82 Lei</p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12" lg="10" xl="10">
          <Row>
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
                    <p>For: Alin Stan</p>
                    <p>Phone: 0721012653</p>
                    <p className="main-heading">Address:</p>
                    <p>
                      Nord City Tower, Bd. Pipera 1 / VII, Et. 9 Volunteers,
                      Ilfov, Romania
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
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
                    <p>For: Alin Stan</p>
                    <p>Phone: 0721012653</p>
                    <p className="main-heading">Address:</p>
                    <p>
                      Nord City Tower, Bd. Pipera 1 / VII, Et. 9 Volunteers,
                      Ilfov, Romania
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>

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
                  <p>Cash on Delivery</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12" lg="10" xl="10">
          <Card>
            <CardHeader>
              <CardTitle id="order-titles">Products of the Veteco</CardTitle>
              <h4 className="new-h">New</h4>
            </CardHeader>
            <hr />
            <CardBody>
              <div className="order-product-main-div">
                <div className="order-product-info">
                  <img
                    className="product-img"
                    src="https://imgs.peteco.ro/images/products/cd/40/cd405ad998c7-cart-default.jpg"
                  />
                  <p>GALLIMUNE 201</p>
                </div>

                <div className="order-product-price">
                  <p>766.60 Lei</p>
                  <span>1 piece</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12" lg="10" xl="10">
          <Card>
            <CardHeader>
              <CardTitle id="order-titles">Products from AniMaxNew</CardTitle>
              <h4 className="new-h">New</h4>
            </CardHeader>
            <hr />
            <CardBody>
              <div className="order-product-main-div">
                <div className="order-product-info">
                  <img
                    className="product-img"
                    src="https://imgs.peteco.ro/images/products/9c/1f/9c1f26c49cb6-cart-default.jpg"
                  />
                  <p>Dry dog ​​food Bosch Maxi Adult 15 kg</p>
                </div>

                <div className="order-product-price">
                  <p>154.99 Lei</p>
                  <span>1 piece</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12" lg="10" xl="10">
          <Card>
            <CardHeader>
              <CardTitle id="order-titles">
                Products from The Happy Animal
              </CardTitle>
              <h4 className="new-h">New</h4>
            </CardHeader>
            <hr />
            <CardBody>
              <div className="order-product-main-div">
                <div className="order-product-info">
                  <img
                    className="product-img"
                    src="https://imgs.peteco.ro/images/products/bd/76/bd762ad8425e-cart-default.jpg"
                  />
                  <p>Silon Club C 10/32 Black collar</p>
                </div>

                <div className="order-product-price">
                  <p>14.33 Lei</p>
                  <span>1 piece</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

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
                    From: <span className="from-name">Alin Stan</span>{" "}
                  </p>
                </Col>

                <Col xs="6" sm="6" md="6" lg="6" xl="6">
                  <FormGroup>
                    <Label for="select-default">By:</Label>
                    <Input type="select" name="select" id="select-default">
                      <option>Veteco</option>
                      <option>Ani Max</option>
                      <option>Happy Animal</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label for="select-default">Message:</Label>
                    <Input type="textarea" />
                  </FormGroup>
                </Col>
              </Row>

              <div className="button-group">
                <Button.Ripple id="cancel-btn" color="primary" outline>
                  Back
                </Button.Ripple>

                <Button.Ripple color="primary">Send</Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default AccountStoreOrdersDetails
