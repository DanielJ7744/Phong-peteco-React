import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import UILoader from '@components/ui-loader'
import ProfilePoll from '../ProfilePolls'
import ProfileAbout from '../ProfileAbout'
import ProfilePosts from '../ProfilePosts'
import ProfileHeader from '../ProfileHeader'
import { 
  Row, 
  Col, 
  Button, 
  CardGroup, 
  Card,
  CardImg,
  CardFooter 
} from 'reactstrap'
import ProfileTwitterFeeds from '../ProfileTwitterFeeds'
import ProfileLatestPhotos from '../ProfileLatestPhotos'
import ProfileSuggestedPages from '../ProfileSuggestedPages'
import ProfileFriendsSuggestions from '../ProfileFriendsSuggestions'
import Breadcrumbs from '@components/breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import { Plus, Image, Share2, ThumbsUp, Repeat } from "react-feather"

import '@styles/react/pages/page-profile.scss'
import "./my-account-videos.scss"
import { 
   getProfileProviders,
   getProfilePets, 
   getProfilePhotos, 
   getsocialProfileWDocuments, 
   getSocialProfileFriendships,
   getSocialProfileActorVotes
   } 
   from '../../store/actions'

const ProfileVideos = (state) => {
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
      <div id="user-profile">
        <section id="profile-info">
          <Row>
            <Col xs="12" sm="6" lg="3" xl="3" md="4">
              <CardGroup style={{ height: "97%" }}>
                <Card>
                  <div
                    className="create-album-main-div">
                    <div>
                      <Button.Ripple
                        className="btn-icon"
                        color="primary"
                        size="lg">
                        <Plus size={25} />
                      </Button.Ripple>
                    </div>
                    <h6 className='create-album-btn'>Create Album</h6>
                    <p className='create-album-subtitle' style={{ textAlign: "center" }}>
                      It only takes a few moments!
                    </p>
                  </div>
                </Card>
              </CardGroup>
            </Col>

            <Col xs="12" sm="6" lg="3" xl="3" md="4">
              <CardGroup style={{ marginBottom: '15px' }}>
                <Card>
                  <CardImg
                    top
                    src="https://www.peteco.ro/img/dummy/photo-item2.jpg"
                    alt="card1"
                  />
                  <div
                  className='image-title'>
                    <p
                    className='image-main-heading'>
                      {" "}
                      Avatar Album
                    </p>
                    <p
                    className='image-year'>
                      2 years ago
                    </p>
                  </div>

                  <CardFooter>
                    <div
                     className='image-stats-main-div'>
                      <div>
                        <Image size={17} style={{ marginRight: "5px" }} />
                        <span style={{ fontSize: "12px" }}>4</span>
                      </div>
                      <div
                      className='image-stats-sub-div'>
                        <div style={{ marginRight: "13px" }}>
                          <Share2 size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>0</span>
                        </div>

                        <div style={{ marginRight: "13px" }}>
                          <Repeat size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>4</span>
                        </div>

                        <div>
                          <ThumbsUp size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>1</span>
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CardGroup>
            </Col>
            <Col xs="12" sm="6" lg="3" xl="3" md="4">
              <CardGroup style={{ marginBottom: '15px' }}>
                <Card>
                  <CardImg
                    top
                    src="https://www.peteco.ro/img/dummy/photo-item2.jpg"
                    alt="card1"
                  />
                  <div
                  className='image-title'>
                    <p
                    className='image-main-heading'>
                      {" "}
                      Avatar Album
                    </p>
                    <p
                    className='image-year'>
                      2 years ago
                    </p>
                  </div>

                  <CardFooter>
                    <div
                     className='image-stats-main-div'>
                      <div>
                        <Image size={17} style={{ marginRight: "5px" }} />
                        <span style={{ fontSize: "12px" }}>4</span>
                      </div>
                      <div
                      className='image-stats-sub-div'>
                        <div style={{ marginRight: "13px" }}>
                          <Share2 size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>0</span>
                        </div>

                        <div style={{ marginRight: "13px" }}>
                          <Repeat size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>4</span>
                        </div>

                        <div>
                          <ThumbsUp size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>1</span>
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CardGroup>
            </Col>
    
            <Col xs="12" sm="6" lg="3" xl="3" md="4">
              <CardGroup style={{ marginBottom: '15px' }}>
                <Card>
                  <CardImg
                    top
                    src="https://www.peteco.ro/img/dummy/photo-item2.jpg"
                    alt="card1"
                  />
                  <div
                  className='image-title'>
                    <p
                    className='image-main-heading'>
                      {" "}
                      Avatar Album
                    </p>
                    <p
                    className='image-year'>
                      2 years ago
                    </p>
                  </div>

                  <CardFooter>
                    <div
                     className='image-stats-main-div'>
                      <div>
                        <Image size={17} style={{ marginRight: "5px" }} />
                        <span style={{ fontSize: "12px" }}>4</span>
                      </div>
                      <div
                      className='image-stats-sub-div'>
                        <div style={{ marginRight: "13px" }}>
                          <Share2 size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>0</span>
                        </div>

                        <div style={{ marginRight: "13px" }}>
                          <Repeat size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>4</span>
                        </div>

                        <div>
                          <ThumbsUp size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>1</span>
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CardGroup>
            </Col>
    
            <Col xs="12" sm="6" lg="3" xl="3" md="4">
              <CardGroup style={{ marginBottom: '15px' }}>
                <Card>
                  <CardImg
                    top
                    src="https://www.peteco.ro/img/dummy/photo-item2.jpg"
                    alt="card1"
                  />
                  <div
                  className='image-title'>
                    <p
                    className='image-main-heading'>
                      {" "}
                      Avatar Album
                    </p>
                    <p
                    className='image-year'>
                      2 years ago
                    </p>
                  </div>

                  <CardFooter>
                    <div
                     className='image-stats-main-div'>
                      <div>
                        <Image size={17} style={{ marginRight: "5px" }} />
                        <span style={{ fontSize: "12px" }}>4</span>
                      </div>
                      <div
                      className='image-stats-sub-div'>
                        <div style={{ marginRight: "13px" }}>
                          <Share2 size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>0</span>
                        </div>

                        <div style={{ marginRight: "13px" }}>
                          <Repeat size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>4</span>
                        </div>

                        <div>
                          <ThumbsUp size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>1</span>
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CardGroup>
            </Col>
    
            <Col xs="12" sm="6" lg="3" xl="3" md="4">
              <CardGroup style={{ marginBottom: '15px' }}>
                <Card>
                  <CardImg
                    top
                    src="https://www.peteco.ro/img/dummy/photo-item2.jpg"
                    alt="card1"
                  />
                  <div
                  className='image-title'>
                    <p
                    className='image-main-heading'>
                      {" "}
                      Avatar Album
                    </p>
                    <p
                    className='image-year'>
                      2 years ago
                    </p>
                  </div>

                  <CardFooter>
                    <div
                     className='image-stats-main-div'>
                      <div>
                        <Image size={17} style={{ marginRight: "5px" }} />
                        <span style={{ fontSize: "12px" }}>4</span>
                      </div>
                      <div
                      className='image-stats-sub-div'>
                        <div style={{ marginRight: "13px" }}>
                          <Share2 size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>0</span>
                        </div>

                        <div style={{ marginRight: "13px" }}>
                          <Repeat size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>4</span>
                        </div>

                        <div>
                          <ThumbsUp size={17} style={{ marginRight: "5px" }} />
                          <span style={{ fontSize: "12px" }}>1</span>
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CardGroup>
            </Col>
       </Row>
        </section>
      </div>
          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default ProfileVideos
