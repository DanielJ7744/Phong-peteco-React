import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./friends.scss"

const Friends = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Friends' breadCrumbParent='Pages' breadCrumbActive='Friends' />
      friends is working
    </Fragment>
  )
}

export default Friends
