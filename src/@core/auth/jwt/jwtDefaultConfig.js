// ** Auth Endpoints
export default {

  /*
  loginEndpoint: '/jwt/login',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: '/jwt/logout',
  */

  createGuest: '/auth/guest/create?with=guest',
  loginEndpoint: '/auth/login?with=profiles',
  registerEndpoint: '/auth/register',
  refreshEndpoint: '/auth/refresh-token',
  logoutEndpoint: '/auth/logout',
  forgotPasswordEndpoint: '/auth/passwords/email',
  resetPasswordEndpoint: '/auth/passwords/reset',


  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  storageGuestTokenKeyName: 'guestAccessToken',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}
