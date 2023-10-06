import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./my-account-photos-view.scss"

const MyAccountPhotosView = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='MyAccountPhotosView' breadCrumbParent='Pages' breadCrumbActive='MyAccountPhotosView' />
      my-account-photos-view is working
    </Fragment>
  )
}

export default MyAccountPhotosView
