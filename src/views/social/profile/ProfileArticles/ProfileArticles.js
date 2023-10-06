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
  CardFooter,
  CardHeader,
  CardTitle,
  CardBody 
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Plus, Image, Share2, ThumbsUp, Repeat, Link } from "react-feather"

import '@styles/react/pages/page-profile.scss'
import "./my-account-articles.scss"
import { 
   getProfileProviders,
   getProfilePets, 
   getProfilePhotos, 
   getsocialProfileWDocuments, 
   getSocialProfileFriendships,
   getSocialProfileActorVotes
   } 
   from '../../store/actions'

const ProfileArticles = (state) => {
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
          <Row
            className="justify-content-center"
            style={{ marginBottom: "2rem" }}
          >
            <Col xs="12" id="cool-link" className="default-line">
              <div
                className='article-heading-main-div'>
                <h5 style={{ width: "100%" }} className="article-heading">
                  ARTICOLE
                </h5>
                <Button.Ripple color="primary">Add</Button.Ripple>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="4" xl="4" md="5" sm="6" xs="12">
              <Card>
                <CardHeader>
                  <CardTitle
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#5e5873"
                    }}
                    id="cool-link"
                    className="default-line"
                  >
                    TEST
                  </CardTitle>
                </CardHeader>
                <CardBody style={{ marginTop: "10px" }}>
                  <div className='article-card-div'>
                    <h6 className="article-name">TEST ARTICLE</h6>
                    <div className='read-more-btn-div'>
                      <Button.Ripple
                        color="primary"
                        outline
                        style={{ marginBottom: "10px" }}
                      >
                        Read More
                      </Button.Ripple>
                    </div>
                    <div>
                      <hr id="border-line" />
                    </div>
                    <p className="tags">
                      Tags: <span className="tags-name"> Test Dog , Cat </span>
                    </p>
                    <div>
                      <hr id="border-line" />
                    </div>
                    <div className="article-action-btn">
                      <Button.Ripple color="danger">Remove</Button.Ripple>
                      <Button.Ripple color="info">Edit</Button.Ripple>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" xl="4" md="5" sm="6" xs="12">
              <Card>
                <CardHeader>
                  <CardTitle
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#5e5873"
                    }}
                    id="cool-link"
                    className="default-line"
                  >
                    TEST
                  </CardTitle>
                </CardHeader>
                <CardBody style={{ marginTop: "10px" }}>
                  <div className='article-card-div'>
                    <h6 className="article-name">TEST ARTICLE</h6>
                    <div className='read-more-btn-div'>
                      <Button.Ripple
                        color="primary"
                        outline
                        style={{ marginBottom: "10px" }}
                      >
                        Read More
                      </Button.Ripple>
                    </div>
                    <div>
                      <hr id="border-line" />
                    </div>
                    <p className="tags">
                      Tags: <span className="tags-name"> Test Dog , Cat </span>
                    </p>
                    <div>
                      <hr id="border-line" />
                    </div>
                    <div className="article-action-btn">
                      <Button.Ripple color="danger">Remove</Button.Ripple>
                      <Button.Ripple color="info">Edit</Button.Ripple>
                    </div>
                  </div>
                </CardBody>
              </Card>
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

export default ProfileArticles
