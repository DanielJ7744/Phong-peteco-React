import { Fragment, useState } from "react"
import "./account-password.scss"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Row,
  Col,
  Button,
  Alert
} from "reactstrap"
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation-safe"
import axios from "axios"
import { useHistory } from "react-router-dom"

const AccountPassword = () => {
  const history = useHistory()

  const [oldPassword, setOldPassword] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [showAlert, setShowAlert] = useState(false)

  const handleChangePassword = () => {
    if (oldPassword !== undefined && password !== undefined && confirmPassword !== undefined) {
      if (password === confirmPassword) {
        if (oldPassword !== password) {
          axios.put(`/auth/passwords/change`, { 
            password: oldPassword,
            password_new: password
           }).then((res) => {
            if (res.data.status_code === 200) {
             return history.push("/account/details")
           }
          })
        }
      }
      if (password !== confirmPassword) {
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(false)
          }, 3000)
      }
    }
  }

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Change Password</CardTitle>
            </CardHeader>

            <CardBody>
            {
              showAlert && (
                <Row style={{ marginTop: '20px' }}>
                <Col xs='12'>
                <Alert color='danger'>
               <h4 className='alert-heading'>Passwords do not match!</h4>
                </Alert>
                </Col>
              </Row>
            
              )
            }
              <Row
                className="justify-content-center"
                style={{ marginTop: "13px" }}
              >
                <Col xs="12">
                  <AvForm>
                    <AvGroup>
                      <Label for="password">Old Password:</Label>
                      <AvInput
                        type="password"
                        name="password"
                        id="password"
                        required
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <AvFeedback>Please enter a valid Password!</AvFeedback>
                    </AvGroup>
                  </AvForm>
                </Col>

                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                  <AvForm>
                    <AvGroup>
                      <Label for="password">New Password:</Label>
                      <AvInput
                        type="password"
                        name="password"
                        id="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}

                      />
                      <AvFeedback>Please enter a valid Password!</AvFeedback>
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
                      <Label for="password">Confirm new password:</Label>
                      <AvInput
                        type="password"
                        name="password"
                        id="password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}

                      />
                      <AvFeedback>Please enter a valid Password!</AvFeedback>
                    </AvGroup>
                    <div className="cancelBtn" id="cancel-btn">
                      <Button.Ripple
                        id="hide-email-btn"
                        onClick={() => handleChangePassword()}
                        color="primary"
                        style={{
                          marginTop: "20px"
                        }}
                      >
                        Change Password
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
                      onClick={() => handleChangePassword()}
                      color="primary"
                      style={{
                        marginTop: "20px"
                      }}
                    >
                      Change Password
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

export default AccountPassword
