import { Fragment } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button
} from "reactstrap"
import {
  LifeBuoy,
  Users,
  Briefcase,
  Slack,
  Home,
  Cast,
  Codepen,
  CreditCard,
  Clipboard
} from "react-feather"
import { Link } from "react-router-dom"
import Avatar from "@components/avatar"

import "./wallet.scss"

const Wallet = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle style={{ fontWeight: "bold" }}>Wallet</CardTitle>
            </CardHeader>
            <hr />
            <CardBody>
              <Row className="justify-content-center">
                <Col lg="4" xl="4" md="12" sm="12" xs="12" style={{ marginBottom: '30px'}}>
                  <div className="user-wallet-main-div">
                    <div className="user-wallet-sub-div">
                      <img
                        className="user-wallet-img"
                        src="https://imgs.peteco.ro/documents/7a/49/7a49ab9985b4-avatar.jpg"
                        alt="user-profile"
                      />
                      <p className="user-wallet-username">Alin Stan</p>
                      <p className="user-wallet-amount">26.00 PetC</p>
                    </div>
                    <Button.Ripple
                      id="user-wallet-btn"
                      size="lg"
                      color="primary"
                    >
                      Transfer
                    </Button.Ripple>
                    <Button.Ripple
                      id="user-wallet-btn"
                      size="lg"
                      color="primary"
                    >
                      Custom Transfer
                    </Button.Ripple>
                    <Button.Ripple
                      id="user-wallet-btn"
                      size="lg"
                      color="primary"
                    >
                      Historic
                    </Button.Ripple>
                  </div>
                </Col>

                <Col lg="8" xl="8" md="12" sm="12" xs="12">
                  <CardTitle style={{ fontWeight: "bold" }}>Pets</CardTitle>
                  <hr />
                  <div className="wallet-card-main-div">
                    <div className="wallet-card-sub-div">
                      <Avatar
                        className="mr-75"
                        img="https://www.peteco.ro/static/img/dummy/author-main2.jpg"
                        imgHeight="auto"
                        imgWidth="70"
                      />
                      <div>
                        <p className="wallet-card-title">Maya</p>
                        <p style={{ fontWeight: "bolder" }}>0 PetC</p>
                      </div>
                    </div>

                    <div className="wallet-card-btns-div">
                      <Button.Ripple
                        style={{ marginBottom: "10px" }}
                        color="primary"
                        outline
                      >
                        Transfer
                      </Button.Ripple>
                      <Button.Ripple color="primary" outline>
                        Historic
                      </Button.Ripple>
                    </div>
                  </div>
                  <div className="wallet-card-main-div">
                    <div className="wallet-card-sub-div">
                      <Avatar
                        className="mr-75"
                        img="https://www.peteco.ro/static/img/dummy/author-main2.jpg"
                        imgHeight="auto"
                        imgWidth="70"
                      />
                      <div>
                        <p className="wallet-card-title">Maya</p>
                        <p style={{ fontWeight: "bolder" }}>0 PetC</p>
                      </div>
                    </div>

                    <div className="wallet-card-btns-div">
                      <Button.Ripple
                        style={{ marginBottom: "10px" }}
                        color="primary"
                        outline
                      >
                        Transfer
                      </Button.Ripple>
                      <Button.Ripple color="primary" outline>
                        Historic
                      </Button.Ripple>
                    </div>
                  </div>

                  <CardTitle style={{ fontWeight: "bold", marginTop: "25px" }}>
                    Providers
                  </CardTitle>
                  <hr />
                  <div className="wallet-card-main-div">
                    <div className="wallet-card-sub-div">
                      <Avatar
                        className="mr-75"
                        img="https://www.peteco.ro/static/img/dummy/author-main2.jpg"
                        imgHeight="auto"
                        imgWidth="70"
                      />
                      <div>
                        <p className="wallet-card-title">Maya</p>
                        <p style={{ fontWeight: "bolder" }}>0 PetC</p>
                      </div>
                    </div>

                    <div className="wallet-card-btns-div">
                      <Button.Ripple
                        style={{ marginBottom: "10px" }}
                        color="primary"
                        outline
                      >
                        Transfer
                      </Button.Ripple>
                      <Button.Ripple color="primary" outline>
                        Historic
                      </Button.Ripple>
                    </div>
                  </div>

                  <div className="wallet-card-main-div">
                    <div className="wallet-card-sub-div">
                      <Avatar
                        className="mr-75"
                        img="https://www.peteco.ro/static/img/dummy/author-main2.jpg"
                        imgHeight="auto"
                        imgWidth="70"
                      />
                      <div>
                        <p className="wallet-card-title">Maya</p>
                        <p style={{ fontWeight: "bolder" }}>0 PetC</p>
                      </div>
                    </div>

                    <div className="wallet-card-btns-div">
                      <Button.Ripple
                        style={{ marginBottom: "10px" }}
                        color="primary"
                        outline
                      >
                        Transfer
                      </Button.Ripple>
                      <Button.Ripple color="primary" outline>
                        Historic
                      </Button.Ripple>
                    </div>
                  </div>

                  <div className="wallet-card-main-div">
                    <div className="wallet-card-sub-div">
                      <Avatar
                        className="mr-75"
                        img="https://www.peteco.ro/static/img/dummy/author-main2.jpg"
                        imgHeight="auto"
                        imgWidth="70"
                      />
                      <div>
                        <p className="wallet-card-title">Maya</p>
                        <p style={{ fontWeight: "bolder" }}>0 PetC</p>
                      </div>
                    </div>

                    <div className="wallet-card-btns-div">
                      <Button.Ripple
                        style={{ marginBottom: "10px" }}
                        color="primary"
                        outline
                      >
                        Transfer
                      </Button.Ripple>
                      <Button.Ripple color="primary" outline>
                        Historic
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

export default Wallet
