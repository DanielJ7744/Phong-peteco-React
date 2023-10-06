import { Fragment, useState } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./account-connected-accounts.scss"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Input
} from "reactstrap"

const AccountConnectedAccounts = () => {
  const [fb, setFb] = useState(false)
  const [insta, setInsta] = useState(false)

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbParent="Pages"
        breadCrumbActive="AccountConnectedAccounts"
      />

      <Row className="justify-content-center">
        <Col xs="12" sm="12" lg="9" xl="9" md="9">
          <Card>
            <CardHeader>
              <CardTitle className="card-title0">Connected Accounts</CardTitle>
            </CardHeader>
            <hr />
            <CardBody>
              <Row>
                <Col
                  xs="12"
                  sm="12"
                  lg="6"
                  xl="6"
                  md="6"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="add-account-main-div">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <h6 className="card-headings">Facebook </h6>
                    </div>
                    {!fb && (
                      <Button.Ripple
                        color="primary"
                        onClick={() => {
                          setInsta(false)
                          setFb(!fb)
                        }}
                      >
                        Add Account
                      </Button.Ripple>
                    )}
                  </div>
                  {fb && (
                    <FormGroup style={{ marginTop: "14px" }}>
                      <Input
                        size="lg"
                        type="password"
                        id="basicInput"
                        placeholder="social url"
                      />
                      <div id="btn-group">
                        <Button.Ripple color="primary" onClick={() => setFb(false)}>Save</Button.Ripple>
                        <Button.Ripple
                          color="secondary"
                          outline
                          onClick={() => setFb(false)}
                        >
                          X
                        </Button.Ripple>
                      </div>
                    </FormGroup>
                  )}
                </Col>
                <Col xs="12" sm="12" lg="6" xl="6" md="6">
                  <div className="add-account-main-div">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <h6 className="card-headings">Instagram </h6>
                    </div>
                    {!insta && (
                      <Button.Ripple
                        color="primary"
                        onClick={() => {
                          setFb(false)
                          setInsta(!insta)
                        }}
                      >
                        Add Account
                      </Button.Ripple>
                    )}
                  </div>
                  {insta && (
                    <FormGroup style={{ marginTop: "14px" }}>
                      <Input
                        size="lg"
                        type="password"
                        id="basicInput"
                        placeholder="social url"
                      />
                      <div id="btn-group">
                        <Button.Ripple color="primary" onClick={() => setInsta(false)}>Save</Button.Ripple>
                        <Button.Ripple
                          color="secondary"
                          outline
                          onClick={() => setInsta(false)}
                        >
                          X
                        </Button.Ripple>
                      </div>
                    </FormGroup>
                  )}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="12" sm="12" lg="9" xl="9" md="9">
          <Card>
            <CardHeader>
              <CardTitle className="card-title0">Facebook</CardTitle>
              <div>
                <Button.Ripple color="warning">Editease</Button.Ripple>
                <Button.Ripple color="danger" style={{ marginLeft: "10px" }}>
                  Sterge
                </Button.Ripple>
              </div>
            </CardHeader>
            <hr />
            <CardBody>
              <p>
                <span style={{ borderBottom: "1px solid rgb(219 219 219)" }}>
                  https://www.facebook.com
                </span>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default AccountConnectedAccounts
