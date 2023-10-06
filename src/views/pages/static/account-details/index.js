import { Fragment } from "react"
import "./account-details.scss"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Button,
  Row,
  Col
} from "reactstrap"
import { Phone, User, Calendar, MapPin } from "react-feather"

const AccountDetails = () => {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xl="9" lg="8" md="12" xs="12">
          <Card className="card-transaction">
            <CardHeader className="wishlist-card-header">
              <CardTitle tag="h4">Profile information</CardTitle>
              <Button.Ripple color="primary">Edit</Button.Ripple>
            </CardHeader>

            <CardBody>
              <div className="transaction-item">
                <Media>
                  <User
                    size={19}
                    color="#5e5873"
                    style={{ marginRight: "10px" }}
                  />

                  <Media body>
                    <h5
                      color="#5e5873"
                      className="transaction-title font-weight-lighter"
                    >
                      Mister. John Doe
                    </h5>
                  </Media>
                </Media>
              </div>
              <div className="transaction-item">
                <Media>
                  <Phone
                    size={19}
                    color="#5e5873"
                    style={{ marginRight: "10px" }}
                  />

                  <Media body>
                    <h5
                      color="#5e5873"
                      className="transaction-title font-weight-lighter"
                    >
                      +3434343434
                    </h5>
                  </Media>
                </Media>
              </div>
              <div className="transaction-item">
                <Media>
                  <Calendar
                    size={19}
                    color="#5e5873"
                    style={{ marginRight: "10px" }}
                  />

                  <Media body>
                    <h5
                      color="#5e5873"
                      className="transaction-title font-weight-lighter"
                    >
                      1976-12-12
                    </h5>
                  </Media>
                </Media>
              </div>
              <div className="transaction-item">
                <Media>
                  <MapPin
                    size={19}
                    color="#5e5873"
                    style={{ marginRight: "10px" }}
                  />

                  <Media body>
                    <h5
                      color="#5e5873"
                      className="transaction-title font-weight-lighter"
                    >
                      Bucharest, Bucharest
                    </h5>
                  </Media>
                </Media>
              </div>
            </CardBody>
          </Card>

          <Row>
            <Col xl="6" lg="6" md="6" sm="12">
              <Card className="card-transaction">
                <CardHeader className="wishlist-card-header">
                  <CardTitle tag="h4">Edit email address</CardTitle>
                  <Button.Ripple color="primary">Edit </Button.Ripple>
                </CardHeader>

                <CardBody>
                  <div className="transaction-item">
                    <Media>
                      <Media body>
                        <h5
                          color="#5e5873"
                          className="transaction-title font-weight-lighter"
                        >
                          Email: alin.stan@agilemedia.com
                        </h5>
                      </Media>
                    </Media>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6" lg="6" md="6" sm="12">
              <Card className="card-transaction">
                <CardHeader className="wishlist-card-header">
                  <CardTitle tag="h4">Edit password</CardTitle>
                  <Button.Ripple color="primary">Edit </Button.Ripple>
                </CardHeader>

                <CardBody>
                  <div className="transaction-item">
                    <Media>
                      <Media body>
                        <h5
                          color="#5e5873"
                          className="transaction-title font-weight-lighter"
                        >
                          Word: ********
                        </h5>
                      </Media>
                    </Media>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}
export default AccountDetails
