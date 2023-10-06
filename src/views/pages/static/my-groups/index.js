import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./my-groups.scss"

const MyGroups = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='MyGroups' breadCrumbParent='Pages' breadCrumbActive='MyGroups' />
      my-groups is working
    </Fragment>
  )
}

export default MyGroups
