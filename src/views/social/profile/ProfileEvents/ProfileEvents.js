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
import ProfileTwitterFeeds from '../ProfileTwitterFeeds'
import ProfileLatestPhotos from '../ProfileLatestPhotos'
import ProfileSuggestedPages from '../ProfileSuggestedPages'
import ProfileFriendsSuggestions from '../ProfileFriendsSuggestions'
import Breadcrumbs from '@components/breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import "./my-events.scss"
import '@styles/react/pages/page-profile.scss'


const ProfileEvents = (state) => {
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
  const event = {
    id: 1,
    // eventThumb: thumb,
    eventTitle: 'sdf'
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
            <div className='my-events container'>
        <Row>
          <Col sm='0' md='0' lg='2'></Col>
          <Col sm='12' md='12' lg='8'>
            <Row>
              <Col lg='12' md='12' sm='12'>
                <Card>
                  <CardHeader className='my-events-header'>
                    <CardTitle tag='h5'>Evenimentele mele</CardTitle>                
                    <Button.Ripple color='primary'>
                      Creeaza eveniment
                    </Button.Ripple>
                  </CardHeader>
                </Card>
              </Col>

              <Col lg='6' md='6' sm='6'>
                <Card>
                  <CardBody className='event-item'>
                    <div className='event-thumb'>
                      <Link to='#' className='event-link'>
                        <img src={'event.eventThumb'} alt='thumb-img' />
                      </Link>
                    </div>
                    <div className='event-title'>
                      <Link to='#' className='event-link'>
                        <span>{event.eventTitle}</span>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default ProfileEvents
