import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./operations-details.scss"

const OperationsDetails = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='OperationsDetails' breadCrumbParent='Pages' breadCrumbActive='OperationsDetails' />
      operations-details is working
    </Fragment>
  )
}

export default OperationsDetails
