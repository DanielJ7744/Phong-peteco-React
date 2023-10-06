import axios from 'axios'
import { getGuestData, getUserData, isUserLoggedIn } from '../../../../auth/utils'

export const getProfileProviders = params => {
  return (dispatch) => {
    const userData = getUserData()
    const profileUid = userData.profile.uid
    return axios.get(`/profiles/${profileUid}/widget/providers`, { params }).then(res => {
      dispatch({ type: 'GET_PROFILE_PROVIDERS', data: res.data})
    })
  }
}

export const getProfilePets = params => {
  return (dispatch) => {
    const userData = getUserData()
    const profileUid = userData.profile.uid
    return axios.get(`/entity/${profileUid}/entity_type/H/pets`, { params }).then(res => {
      dispatch({ type: 'GET_PROFILE_PETS', data: res.data})
    })
  }
}

export const getProfilePhotos = params => {
  return (dispatch) => {
    const userData = getUserData()
    const profileUid = userData.profile.uid
    return axios.get(`/profiles/${profileUid}/photos`, { params }).then(res => {
      dispatch({ type: 'GET_PROFILE_PHOTOS', data: res.data})
    })
  }
}

export const getSocialProfileWDocuments = params => {
  return (dispatch) => {
    const userData = getUserData()
    const profileUid = userData.profile.uid
    // return axios.get(`/social/slug/${profileUid}?with=simpledocuments`, { params }).then(res => {
    //   dispatch({ type: 'GET_PROFILE_DOCUMENTS', data: res.data})
    // })
  }
}

export const getSocialProfileFriendships = params => {
  return (dispatch) => {
    const userData = getUserData()
    const profileUid = userData.profile.uid
    return axios.get(`/profiles/${profileUid}/widget/friendships`, { params }).then(res => {
      dispatch({ type: 'GET_PROFILE_FRIENDSHIPS', data: res.data})
    })
  }
}

export const getSocialProfileActorVotes = params => {
  return (dispatch) => {
    const userData = getUserData()
    const profileUid = userData.profile.uid
    return axios.get(`profiles/${profileUid}/votes?actor_profile_uid=${profileUid}`, { params }).then(res => {
      dispatch({ type: 'GET_PROFILE_ACTOR_VOTES', data: res.data})
    })
  }
}