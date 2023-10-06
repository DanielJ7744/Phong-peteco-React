import { Fragment } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Col,
  Button,
  Row
} from "reactstrap"
import { Power, Cast, User } from "react-feather"

import "./my-groups.scss"
import cardImg from "@src/assets/images/pages/auth-v1-bottom-bg.png"

const MyGroups = () => {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h4">My Groups</CardTitle>
              <Button.Ripple color="primary">Create A Group</Button.Ripple>
            </CardHeader>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col>
          <Card className="card-transaction">
            <CardBody>
              <Row>
                <Col sm="12" md="6" xl="6" lg="12">
                  <div className="user-avatar-section">
                    <div className="d-flex justify-content-start">
                      <img
                        src={cardImg}
                        alt="user-avatar"
                        className="img-fluid rounded"
                        height="104"
                        width="104"
                      />
                      <div className="d-flex flex-column ml-1">
                        <div className="user-info mb-1">
                          <h5 style={{ marginLeft: "3px" }} className="mb-0">
                            Test Group
                          </h5>
                        </div>
                        <div
                          className="transaction-item"
                          style={{ marginBottom: "0px" }}
                        >
                          <Media>
                            <User
                              size={15}
                              color="#5e5873"
                              style={{ marginRight: "4px" }}
                            />

                            <Media body>
                              <span
                                color="#5e5873"
                                className="transaction-title font-weight-lighter"
                              >
                                1 members
                              </span>
                            </Media>
                          </Media>
                        </div>
                        <div
                          className="transaction-item"
                          style={{ marginBottom: "0px" }}
                        >
                          <Media>
                            <Cast
                              size={15}
                              color="#5e5873"
                              style={{ marginRight: "4px" }}
                            />

                            <Media body>
                              <span
                                color="#5e5873"
                                className="transaction-title font-weight-lighter"
                              >
                                0 posts
                              </span>
                            </Media>
                          </Media>
                        </div>
                        <div className="transaction-item">
                          <Media>
                            <Power
                              size={15}
                              color="#5e5873"
                              style={{ marginRight: "4px" }}
                            />

                            <Media body>
                              <span
                                color="#5e5873"
                                className="transaction-title font-weight-lighter"
                              >
                                0 comments
                              </span>
                            </Media>
                          </Media>
                        </div>
                      </div>
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

export default MyGroups
