import { Fragment } from "react"
import "./account-password.scss"
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap"

const AccountPassword = () => {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xl="9" lg="8" md="8" xs="12">
          <Card className="card-transaction">
            <CardHeader className="wishlist-card-header">
              <CardTitle tag="h4">Change Password</CardTitle>
            </CardHeader>

            <CardBody>
              <Row className="justify-content-center">
                <Col xs="12">
                  <FormGroup>
                    <Label for="basicInput">Old Password:</Label>
                    <Input type="password" id="basicInput" placeholder="" />
                  </FormGroup>
                </Col>

                <Col xs="12" sm="6" lg="6" xl="6" md="6">
                  <FormGroup>
                    <Label for="basicInput">New Password:</Label>
                    <Input type="password" id="basicInput" placeholder="" />
                  </FormGroup>
                </Col>
                <Col xs="12" sm="6" lg="6" xl="6" md="6">
                  <FormGroup>
                    <Label for="basicInput">Confirm new password:</Label>
                    <Input type="password" id="basicInput" placeholder="" />
                  </FormGroup>
                </Col>

                <Col xs="12">
                  <div className="btn-group">
                    <div>
                      <Button.Ripple
                        id="cancel-btn-0"
                        color="primary"
                        outline
                        style={{
                          marginTop: "20px"
                        }}
                      >
                        Back
                      </Button.Ripple>
                    </div>
                    <div className="cancelBtn" id="cancel-btn">
                      <Button.Ripple
                        color="primary"
                        style={{
                          marginTop: "20px"
                        }}
                      >
                        Change Password
                      </Button.Ripple>
                    </div>
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

export default AccountPassword
