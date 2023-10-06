import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./feed.scss"

const Feed = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Feed' breadCrumbParent='Pages' breadCrumbActive='Feed' />
      feed is working
    </Fragment>
  )
}

export default Feed
