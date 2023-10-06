import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./footer.scss"

const Footer = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Footer' breadCrumbParent='Pages' breadCrumbActive='Footer' />
     footer is working
    </Fragment>
  )
}

export default Footer
