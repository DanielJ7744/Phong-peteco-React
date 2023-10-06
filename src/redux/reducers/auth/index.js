// **  Initial State
const initialState = {
  userData: {},
  userProfile: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userData: action.data,
        [action.config.storageTokenKeyName]: action[action.config.storageTokenKeyName],
        [action.config.storageRefreshTokenKeyName]: action[action.config.storageRefreshTokenKeyName]
      }
    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {}, ...obj }
    case 'GET_PROFILE_INFO':
      return {
        ...state,
        userProfile: action.data.data
      }
    default:
      return state
  }
}

export default authReducer
