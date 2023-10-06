import { Fragment } from "react"
import "./account-email.scss"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button
} from "reactstrap"

const AccountEmail = () => {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xl="9" lg="8" md="8" xs="12">
          <Card className="card-transaction">
            <CardHeader className="wishlist-card-header">
              <CardTitle tag="h4">Change email address</CardTitle>
            </CardHeader>

            <CardBody>
              <Row className="justify-content-center">
                <Col xs="6">
                  <FormGroup>
                    <Label for="basicInput">New email address:</Label>
                    <Input type="email" id="basicInput" placeholder="" />
                    <Button.Ripple
                      color="primary"
                      outline
                      style={{
                        marginTop: "20px"
                      }}
                    >
                      Back
                    </Button.Ripple>
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup>
                    <Label for="basicInput">Confirm new email address:</Label>
                    <Input type="email" id="basicInput" placeholder="" />

                    <div className="cancelBtn" id="cancel-btn">
                      <Button.Ripple
                        color="primary"
                        style={{
                          marginTop: "20px"
                        }}
                      >
                        Change Email
                      </Button.Ripple>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AccountEmail
