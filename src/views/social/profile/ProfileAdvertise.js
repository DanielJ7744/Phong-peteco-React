import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import UILoader from '@components/ui-loader'
import ProfilePoll from './ProfilePolls'
import ProfileAbout from './ProfileAbout'
import ProfilePosts from './ProfilePosts'
import ProfileHeader from './ProfileHeader'
import { Row, Col, Button } from 'reactstrap'
import ProfileTwitterFeeds from './ProfileTwitterFeeds'
import ProfileLatestPhotos from './ProfileLatestPhotos'
import ProfileSuggestedPages from './ProfileSuggestedPages'
import ProfileFriendsSuggestions from './ProfileFriendsSuggestions'
import Breadcrumbs from '@components/breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'

import '@styles/react/pages/page-profile.scss'
import { 
   getProfileProviders,
   getProfilePets, 
   getProfilePhotos, 
   getsocialProfileWDocuments, 
   getSocialProfileFriendships,
   getSocialProfileActorVotes
   } 
   from '../store/actions'

const ProfileAdvertise = (state) => {
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
            <Row>
              <Col className='text-center' sm='12'>
                ProfileAdvertise
              </Col>
            </Row>
          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default ProfileAdvertise
