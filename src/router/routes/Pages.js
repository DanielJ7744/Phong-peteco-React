import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
  {
    path: '/login',
    component: lazy(() => import('../../views/pages/authentication/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/login-v1',
    component: lazy(() => import('../../views/pages/authentication/LoginV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/login-v2',
    component: lazy(() => import('../../views/pages/authentication/LoginV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/pages/authentication/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/register-v1',
    component: lazy(() => import('../../views/pages/authentication/RegisterV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/register-v2',
    component: lazy(() => import('../../views/pages/authentication/RegisterV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/pages/authentication/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/forgot-password-v1',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/forgot-password-v2',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV2.js')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-v1',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-v2',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/password/change',
    component: lazy(() => import('../../views/pages/authentication/ResetPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/faq',
    component: lazy(() => import('../../views/pages/faq'))
  },
  {
    path: '/pages/knowledge-base',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBase'))
  },
  {
    path: '/pages/knowledge-base/:category',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategory')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/pages/knowledge-base/:category/:question',
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategoryQuestion')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/pages/account-settings',
    component: lazy(() => import('../../views/pages/account-settings'))
  },
  {
    path: '/pages/blog/list',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/list'))
  },
  {
    path: '/pages/blog/detail/:id',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/details')),
    meta: {
      navLink: '/pages/blog/detail'
    }
  },
  {
    path: '/pages/blog/detail',
    exact: true,
    component: () => <Redirect to='/pages/blog/detail/1' />
  },
  {
    path: '/pages/blog/edit/:id',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/edit')),
    meta: {
      navLink: '/pages/blog/edit'
    }
  },
  {
    path: '/pages/blog/edit',
    exact: true,
    component: () => <Redirect to='/pages/blog/edit/1' />
  },
  {
    path: '/pages/pricing',
    component: lazy(() => import('../../views/pages/pricing'))
  },
  {
    path: '/misc/coming-soon',
    component: lazy(() => import('../../views/pages/misc/ComingSoon')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/not-authorized',
    component: lazy(() => import('../../views/pages/misc/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/maintenance',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/error',
    component: lazy(() => import('../../views/pages/misc/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  //static routes
  {
    path: '/home',
    className: 'home',
    exact: true,
    component: lazy(() => import('../../views/pages/static/home'))
  },
  {
    path: '/footer',
    className: 'footer',
    exact: true,
    component: lazy(() => import('../../views/pages/static/footer'))
  },
  // {
  //   path: '/store',
  //   className: 'store',
  //   exact: true,
  //   component: lazy(() => import('../../views/pages/static/store'))
  // },
  // {
  //   path: '/store/c',
  //   className: 'storec',
  //   exact: true,
  //   component: lazy(() => import('../../views/pages/static/storec'))
  // },
  {
    path: '/store/p',
    className: 'storep',
    exact: true,
    component: lazy(() => import('../../views/pages/static/storep'))
  },
  {
    path: '/store/brands',
    className: 'store-brands',
    exact: true,
    component: lazy(() => import('../../views/pages/static/store-brands'))
  },
  {
    path: '/vendors',
    className: 'vendors',
    exact: true,
    component: lazy(() => import('../../views/pages/static/vendors'))
  },
  {
    path: '/store/cart',
    className: 'store-cart',
    exact: true,
    component: lazy(() => import('../../views/pages/static/store-cart'))
  },
  {
    path: '/checkout/details',
    className: 'checkout-details',
    exact: true,
    component: lazy(() => import('../../views/pages/static/checkout-details'))
  },
  {
    path: '/checkout/details/address-change',
    className: 'details-address-change',
    exact: true,
    component: lazy(() => import('../../views/pages/static/details-address-change'))
  },
  {
    path: '/account/store/addresses',
    className: 'p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/Orders/OrderAdresses/OrderAdresses')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/wishlists',
    className: 'wishlists',
    exact: true,
    component: lazy(() => import('../../views/pages/static/wishlists'))
  },
  {
    path: '/wishlist/view',
    className: 'wishlist-view',
    exact: true,
    component: lazy(() => import('../../views/pages/static/wishlist-view'))
  },
  {
    path: '/account/details',
    className: 'p-0 account-details',
    component: lazy(() => import('../../views/pages/account-settings/MyAccount/MyAccount')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/account/store/addresses/create/personal',
    className: 'p-0 account-details',
    component: lazy(() => import('../../views/pages/account-settings/MyAccount/MyAccount')),
    layout: 'MyAccountSettingsLayout'
  },
  // {
  //   path: '/account/edit',
  //   className: 'account-edit',
  //   exact: true,
  //   component: lazy(() => import('../../views/pages/static/account-edit')),
  //   layout: 'MyAccountSettingsLayout'
  // },
  // {
  //   path: '/account/email',
  //   className: 'account-email',
  //   exact: true,
  //   component: lazy(() => import('../../views/pages/static/account-email'))
  // },
  {
    path: '/account/store',
    className: 'p-0 account-store',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/Orders/Orders')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/account/store/orders/details',
    className: 'account-store-orders-details',
    exact: true,
    component: lazy(() => import('../../views/pages/static/account-store-orders-details'))
  },
  // {
  //   path: '/account/password',
  //   className: 'account-password',
  //   exact: true,
  //   component: lazy(() => import('../../views/pages/static/account-password'))
  // },
  {
    path: '/account/store/orders/cancel',
    className: 'account-store-orders-cancel',
    exact: true,
    component: lazy(() => import('../../views/pages/static/account-store-orders-cancel'))
  },
  {
    path: '/providers',
    className: 'p-0 providers',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/MyCompanies/MyCompanies')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/pets',
    className: 'pets',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/My Pets/MyPets')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/wallet',
    className: 'wallet p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/Wallet/Wallet')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/providers/create',
    className: 'createnewcompany p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/MyCompanies/CreateNewCompany/CreateNewCompany')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/providers/create/newprovider',
    className: 'providers-create-newprovider',
    exact: true,
    component: lazy(() => import('../../views/pages/static/providers-create-newprovider'))
  },
  {
    path: '/my-groups',
    className: 'my-groups p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/MyGroups/MyGroups')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/my-groups/create',
    className: 'my-groups-create',
    exact: true,
    component: lazy(() => import('../../views/pages/static/my-groups-create'))
  },
  {
    path: '/my-events',
    className: 'my-events p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/MyEvents/MyEvents')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/my-events/create',
    className: 'my-events-create',
    exact: true,
    component: lazy(() => import('../../views/pages/static/my-events-create'))
  },
  {
    path: '/account/connected_accounts',
    className: 'connected-accounts p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/ConnectedAccounts/ConnectedAccounts')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/my-account',
    className: 'my-account',
    exact: true,
    component: lazy(() => import('../../views/pages/static/my-account'))
  },
  {
    path: '/feed',
    className: 'feed',
    exact: true,
    component: lazy(() => import('../../views/pages/static/feed'))
  },
  {
    path: '/my-account/photos',
    className: 'my-account-photos',
    exact: true,
    component: lazy(() => import('../../views/pages/static/my-account-photos'))
  },
  {
    path: '/my-account/photos/createalbum',
    className: 'my-account-photos-createalbum',
    exact: true,
    component: lazy(() => import('../../views/pages/static/my-account-photos-createalbum'))
  },
  {
    path: '/my-account/photos/view',
    className: 'my-account-photos-view',
    exact: true,
    component: lazy(() => import('../../views/pages/static/my-account-photos-view'))
  },
  {
    path: '/my-account/articles',
    className: 'my-account-articles',
    exact: true,
    component: lazy(() => import('../../views/pages/static/my-account-articles'))
  },
  {
    path: '/my-account/manager/articles/create',
    className: 'my-account-manager-articles-create',
    exact: true,
    component: lazy(() => import('../../views/pages/static/my-account-manager-articles-create'))
  },
  {
    path: '/search/social/profiles/names',
    className: 'search-social-profiles-names',
    exact: true,
    component: lazy(() => import('../../views/pages/static/search-social-profiles-names'))
  },
  {
    path: '/search/social/articles/article',
    className: 'search-social-articles-article',
    exact: true,
    component: lazy(() => import('../../views/pages/static/search-social-articles-article'))
  },
  {
    path: '/notifications',
    className: 'notifications',
    exact: true,
    component: lazy(() => import('../../views/pages/static/notifications'))
  },
  {
    path: '/friends',
    className: 'friends',
    exact: true,
    component: lazy(() => import('../../views/pages/static/friends'))
  },
  {
    path: '/messages',
    className: 'messages',
    exact: true,
    component: lazy(() => import('../../views/pages/static/messages'))
  },
  {
    path: '/items',
    className: 'items',
    exact: true,
    component: lazy(() => import('../../views/pages/static/items'))
  },
  {
    path: '/privacy',
    className: 'privacy',
    exact: true,
    component: lazy(() => import('../../views/pages/static/privacy'))
  },
  {
    path: '/privacy',
    className: 'privacy',
    exact: true,
    component: lazy(() => import('../../views/pages/static/privacy'))
  },
  {
    path: '/contact',
    className: 'contact',
    exact: true,
    component: lazy(() => import('../../views/pages/static/contact'))
  },
  {
    path: '/transfer',
    className: 'transfer',
    exact: true,
    component: lazy(() => import('../../views/pages/static/transfer'))
  },
  {
    path: '/operations',
    className: 'operations',
    exact: true,
    component: lazy(() => import('../../views/pages/static/operations'))
  },
  {
    path: '/operations/details',
    className: 'operations-details',
    exact: true,
    component: lazy(() => import('../../views/pages/static/operations-details'))
  },
  {
    path: '/account/documents',
    className: 'account-documents p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/Documents/Documents')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/account/edit',
    className: 'account-documents p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/MyAccount/MyAccountEditProfile/MyAccountEditProfile')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/account/email',
    className: 'account-email p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/MyAccount/MyAccountEditEmail/MyAccountEditEmail')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    path: '/account/password',
    className: 'account-password p-0',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/MyAccount/MyAccountEditPassword/MyAccountEditPassword')),
    layout: 'MyAccountSettingsLayout'
  },
  {
    //  {/* 0440ccd3af6e must be {orderId} */},
    path: '/account/store/orders/:order_id/details',
    className: 'account-documents',
    exact: true,
    component: lazy(() => import('../../views/pages/account-settings/Orders/OrdersDetails/OrdersDetails'))
  },
  {
    //  {/* 0440ccd3af6e must be {orderId} */},
    path: '/my-events-static',
    className: 'account-documents',
    exact: true,
    component: lazy(() => import('../../views/pages/static/my-events'))
  }
]

export default PagesRoutes
