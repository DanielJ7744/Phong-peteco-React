import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const SocialRoutes = [
    {
        //path: ':vanity_slug',
        path: '/pages/profile',
        className: 'p-0',
        layout: 'SocialHeaderLayout',
        component: lazy(() => import('../../views/social/profile/index'))
    },
    {
        //path: ':vanity_slug',
       path: '/:vanity_slug/profilepets',
       className: 'p-0',
       layout: 'SocialHeaderLayout',
       component: lazy(() => import('../../views/social/profile/ProfilePets/ProfilePets'))
   },
   {
        //path: ':vanity_slug',
        path: '/:vanity_slug/photos',
        className: 'p-0',
        layout: 'SocialHeaderLayout',
        component: lazy(() => import('../../views/social/profile/ProfilePhotos/ProfilePhotos'))
    },
    {
        //path: ':vanity_slug',
        path: '/:vanity_slug/videos',
        className: 'p-0',
        layout: 'SocialHeaderLayout',
        component: lazy(() => import('../../views/social/profile/ProfileVideos/ProfileVideos'))
    },
    {
        //path: ':vanity_slug',
        path: '/:vanity_slug/articles',
        className: 'p-0',
        layout: 'SocialHeaderLayout',
        component: lazy(() => import('../../views/social/profile/ProfileArticles/ProfileArticles'))
    },
    {
        //path: ':vanity_slug',
        path: '/:vanity_slug/events',
        className: 'p-0',
        layout: 'SocialHeaderLayout',
        component: lazy(() => import('../../views/social/profile/ProfileEvents/ProfileEvents'))
    },
    {
        //path: ':vanity_slug',
        path: '/:vanity_slug/groups',
        className: 'p-0',
        layout: 'SocialHeaderLayout',
        component: lazy(() => import('../../views/social/profile/ProfileGroups/ProfileGroups'))
    },
    {
        //path: ':vanity_slug',
        path: '/:vanity_slug/advertise',
        className: 'p-0',
        layout: 'SocialHeaderLayout',
        component: lazy(() => import('../../views/social/profile/ProfileAdvertise'))
    },

    {
        path: '/apps/email',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/apps/email'))
    },
    {
        path: '/apps/email',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/apps/email'))
    },
    {
        path: '/apps/email',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/apps/email'))
    },
    {
        path: '/apps/email',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/apps/email'))
    }

]

export default SocialRoutes
