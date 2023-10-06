import { Fragment, useState } from "react"
import "./account-email.scss"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Row,
  Col,
  Button
} from "reactstrap"
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation-safe"
import axios from "axios"
import { useHistory } from "react-router-dom"

const AccountEmail = () => {
  const history = useHistory()

  const [email, setEmail] = useState()
  const [confirmEmail, setConfirmEmail] = useState()

  const handleChangeEmail = () => {
    if (email !== undefined && confirmEmail !== undefined) {
      if (email === confirmEmail) {
        axios.post(`/auth/emails/change`, { email_new: email }).then((res) => {
          if (res.data.status_code === 200) {
            return history.push("/account/details")
          }
        })
      }
    }
  }

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Change email address</CardTitle>
            </CardHeader>

            <CardBody>
              <Row
                className="justify-content-center"
                style={{ marginTop: "13px" }}
              >
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                  <AvForm>
                    <AvGroup>
                      <Label for="email">New email address:</Label>
                      <AvInput
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <AvFeedback>Please enter a valid email!</AvFeedback>
                    </AvGroup>
                    <Button.Ripple
                      id="hide-email-btn"
                      onClick={() => history.goBack()}
                      color="primary"
                      outline
                      style={{
                        marginTop: "20px"
                      }}
                    >
                      Back
                    </Button.Ripple>
                  </AvForm>
                </Col>

                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                  <AvForm>
                    <AvGroup>
                      <Label for="email">Confirm new email address:</Label>
                      <AvInput
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={(e) => setConfirmEmail(e.target.value)}
                      />
                      <AvFeedback>Please enter a valid email!</AvFeedback>
                    </AvGroup>
                    <div className="cancelBtn" id="cancel-btn">
                      <Button.Ripple
                        id="hide-email-btn"
                        onClick={() => handleChangeEmail()}
                        color="primary"
                        style={{
                          marginTop: "20px"
                        }}
                      >
                        Change Email
                      </Button.Ripple>
                    </div>
                  </AvForm>
                </Col>

                <Col xs="12">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button.Ripple
                      id="show-email-btn"
                      onClick={() => history.goBack()}
                      color="primary"
                      outline
                      style={{
                        marginTop: "20px"
                      }}
                    >
                      Back
                    </Button.Ripple>

                    <Button.Ripple
                      id="show-email-btn"
                      onClick={() => handleChangeEmail()}
                      color="primary"
                      style={{
                        marginTop: "20px"
                      }}
                    >
                      Change Email
                    </Button.Ripple>
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

export default AccountEmail
