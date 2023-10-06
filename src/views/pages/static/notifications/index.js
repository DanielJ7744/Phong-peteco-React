import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./notifications.scss"

const Notifications = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Notifications' breadCrumbParent='Pages' breadCrumbActive='Notifications' />
      notifications is working
    </Fragment>
  )
}

export default Notifications
