import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./items.scss"

const Items = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Items' breadCrumbParent='Pages' breadCrumbActive='Items' />
      items is working
    </Fragment>
  )
}

export default Items
