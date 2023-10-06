const initialState = {
  profileProviders: [],
  profilePets: [],
  profilePhotos: [],
  profileDocuments: [],
  profileFriendships: [],
  profileActorVotes: []

}

const socialReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE_PROVIDERS':
      return { ...state, profileProviders: action.data }
    case 'GET_PROFILE_PETS':
      return { ...state, profilePets: action.data }
    case 'GET_PROFILE_PHOTOS':
      return { ...state, profilePhotos: action.data }
    case 'GET_PROFILE_DOCUMENTS':
      return { ...state, profileDocuments: action.data }
    case 'GET_PROFILE_FRIENDSHIPS':
      return { ...state, profileFriendships: action.data }
    case 'GET_PROFILE_ACTOR_VOTES':
      return { ...state, profileActorVotes: action.data }

    default:
      return state
  }
}

export default socialReducer
