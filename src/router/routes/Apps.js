import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: [

      // '/apps/ecommerce/shop',
      '/store/c/:slug+/sortBy-:sortBy/p:pageNumber',
      '/store/c/:slug+/sortBy-:sortBy',

      '/store/c/:slug+/brand/:brand/price-:price/rating-:rating-sortBy-:sortBy/p:pageNumber',
      '/store/c/:slug+/brand/:brand/price-:price/rating-:rating-sortBy-:sortBy',

      '/store/c/:slug+/brand/:brand/price-:price-sortBy-:sortBy/p:pageNumber',
      '/store/c/:slug+/brand/:brand/price-:price-sortBy-:sortBy',

      '/store/c/:slug+/price-:price/rating-:rating-sortBy-:sortBy/p:pageNumber',
      '/store/c/:slug+/price-:price/rating-:rating-sortBy-:sortBy',

      '/store/c/:slug+/brand/:brand/rating-:rating-sortBy-:sortBy/p:pageNumber',
      '/store/c/:slug+/brand/:brand/rating-:rating-sortBy-:sortBy',

      '/store/c/:slug+/rating-:rating-sortBy-:sortBy/p:pageNumber',
      '/store/c/:slug+/rating-:rating-sortBy-:sortBy',

      '/store/c/:slug+/price-:price-sortBy-:sortBy/p:pageNumber',
      '/store/c/:slug+/price-:price-sortBy-:sortBy',

      '/store/c/:slug+/brand/:brand-sortBy-:sortBy/p:pageNumber',
      '/store/c/:slug+/brand/:brand-sortBy-:sortBy',
      // sorting ends

      '/store/c/:slug+/brand/:brand/price-:price/rating-:rating/p:pageNumber',
      '/store/c/:slug+/brand/:brand/price-:price/rating-:rating',

      '/store/c/:slug+/brand/:brand/price-:price/p:pageNumber',
      '/store/c/:slug+/brand/:brand/price-:price',

      '/store/c/:slug+/price-:price/rating-:rating/p:pageNumber',
      '/store/c/:slug+/price-:price/rating-:rating',

      '/store/c/:slug+/brand/:brand/rating-:rating/p:pageNumber',
      '/store/c/:slug+/brand/:brand/rating-:rating',

      '/store/c/:slug+/brand/:brand/p:pageNumber', 
      '/store/c/:slug+/brand/:brand', 

      '/store/c/:slug+/price-:price/p:pageNumber',
      '/store/c/:slug+/price-:price',

      '/store/c/:slug+/rating-:rating/p:pageNumber',
      '/store/c/:slug+/rating-:rating',

      '/store/c/:slug+/p:pageNumber',
      '/store/c/:slug+'
    ],
    meta: {
      publicRoute: true
    },
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: [
      '/account/store/wishlists/p:pageNumber',
      '/account/store/wishlists'
    ],
    meta: {
      publicRoute: false
    },
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist/wishlistList'))
  },
  {
    path: '/account/store/wishlists/create',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist/wishlistListCreate'))
  },
  {
    path: [
      '/account/store/wishlists/:wishlist_uid/view/p:pageNumber',
      '/account/store/wishlists/:wishlist_uid/view'
    ],
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist/wishlistListItems')),
    meta: {
      publicRoute: true
      }
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/store/p/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail',
      publicRoute: true
    }
  },
  {
    path: '/store/cart',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },
  {
    path: '/apps/user/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  },
  {
    path: '/store',
    className: 'CategoriesPage',
    exact: true,
    component: lazy(() => import('../../views/apps/ecommerce/shop/CategoriesPage')),
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/account/store/wishlists/create',
    className: 'CategoriesPage',
    exact: true,
    component: lazy(() => import('../../views/apps/ecommerce/wishlist/wishlistListCreate'))
  }
]

export default AppRoutes
