import { Fragment } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./account-store-orders-cancel.scss"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap"

const AccountStoreOrdersCancel = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbParent="Pages"
        breadCrumbActive="AccountStoreOrdersCancel"
      />
      <Row className="justify-content-center">
        <Col xs="12" sm="10" lg="9" xl="9" md="10">
          <Card>
            <CardHeader>
              <CardTitle className="cancel-order-title">
                Cancel order # 8fe4608389f0
              </CardTitle>
            </CardHeader>
            <hr />
            <CardBody>
              <div className="cancel-order-main-div">
                <p className="total-amount">
                  Total amount of products: 935.92 Lei
                </p>
                <p className="total-amount">Delivery cost: 34.90 Lei</p>
                <p className="payment-amount">Payment amount: 970.82 Lei</p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="12" sm="10" lg="9" xl="9" md="10">
          <Card>
            <CardBody>
              <div className="cancel-order-reason">
                <FormGroup style={{ marginBottom: "20px" }}>
                  <Label for="basicInput" className="cancel-reason-label">
                    Reason for cancellation
                  </Label>
                  <Input type="select" name="select" id="select-default">
                    <option>Select reason</option>
                    <option>
                      I changed my mind, I don't need the product anymore
                    </option>
                    <option>I found a better price elsewhere</option>
                    <option>Delivery cost is too high</option>
                    <option>Delivery time is too long</option>
                    <option>I can only pay for the product </option>
                    <option>
                      I placed another order with a similar product
                    </option>
                    <option>Other reasons</option>
                  </Input>
                  <span className="choose-reason">
                    Choose a reason to cancel the order
                  </span>
                </FormGroup>

                <div>
                  <Button.Ripple color="primary" outline>
                    Cancel Order
                  </Button.Ripple>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AccountStoreOrdersCancel
