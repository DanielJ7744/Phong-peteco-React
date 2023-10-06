import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./my-account-photos.scss"

const MyAccountPhotos = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='MyAccountPhotos' breadCrumbParent='Pages' breadCrumbActive='MyAccountPhotos' />
      my-account-photos is working
    </Fragment>
  )
}

export default MyAccountPhotos
