import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./my-account.scss"

const MyAccount = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='MyAccount' breadCrumbParent='Pages' breadCrumbActive='MyAccount' />
      my-account is working
    </Fragment>
  )
}

export default MyAccount
