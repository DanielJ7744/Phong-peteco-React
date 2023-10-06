import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Button,
  Row,
  Col,
  NavLink
} from "reactstrap"
import { Phone, User, Calendar, MapPin } from "react-feather"
import { isUserLoggedIn } from "../../../../auth/utils"

const MyAccount = () => {
   // ** Store Vars
   const dispatch = useDispatch()
   const store = useSelector(state => state.auth.userProfile[0])
   
   console.log({store})

   //getting the info from the store
   const profileName = store ? store.name : ''
   const birthDate = store ? store.birth_date : ''

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col>
          <Card className="card-transaction">
            <CardHeader className="wishlist-card-header">
              <CardTitle tag="h4">Profile information</CardTitle>

              <Link to='/account/edit'>
              <Button.Ripple color="primary" >
                Edit
                </Button.Ripple>
                </Link>

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
                     {profileName}
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
                  <Link to='/account/email'>
              <Button.Ripple color="primary" >
                Edit
                </Button.Ripple>
                </Link>

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
                  <Link to='/account/password'>
              <Button.Ripple color="primary" >
                Edit
                </Button.Ripple>
                </Link>

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
export default MyAccount
