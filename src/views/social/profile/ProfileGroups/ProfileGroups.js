import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import UILoader from '@components/ui-loader'
import { 
  Row, 
  Col, 
  Button, 
  CardGroup, 
  Card,
  CardImg,
  CardFooter,
  CardHeader,
  CardTitle,
  CardBody,
  Media
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import { Power, Cast, User } from "react-feather"

import "./my-groups.scss"

import cardImg from "@src/assets/images/pages/auth-v1-bottom-bg.png"
import '@styles/react/pages/page-profile.scss'
import { 
   getProfileProviders,
   getProfilePets, 
   getProfilePhotos, 
   getsocialProfileWDocuments, 
   getSocialProfileFriendships,
   getSocialProfileActorVotes
   } 
   from '../../store/actions'

const ProfileGroups = (state) => {
  const [data, setData] = useState()
  const [block, setBlock] = useState(false)

  
  const dispatch = useDispatch()
  const userStore = useSelector(state => state.auth.userProfile[0])
  const store = useSelector(state => state.social)

  console.log("social store: ", store)


  useEffect(() => {
    // axios.get('/profile/data').then(response => setData(response.data))
    // dispatch(getProfileProviders())
    // dispatch(getProfilePets())
    // dispatch(getProfilePhotos())
    // dispatch(getsocialProfileWDocuments())
    // dispatch(getSocialProfileFriendships())
    // dispatch(getSocialProfileActorVotes())
  }, [])

  const handleBlock = () => {
    setBlock(true)
    setTimeout(() => {
      setBlock(false)
    }, 2000)
  }
  
  return (
    <Fragment>
      {data !== null ? (
        <div id='user-profile'>
          <section id='profile-info'>
            <Row>
              <Col lg={{ size: 3, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}>
                {/* <ProfileAbout data={data.userAbout} /> */}
              </Col>
            </Row>
            <Row className="justify-content-center">
        <Col xs="12" sm="12" lg="9" xl="9" md="10">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">My Groups</CardTitle>
              <Button.Ripple color="primary">Create A Group</Button.Ripple>
            </CardHeader>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="12" sm="12" lg="9" xl="9" md="10">
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
          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default ProfileGroups
