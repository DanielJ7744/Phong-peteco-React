import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./wallet.scss"

const Wallet = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Wallet' breadCrumbParent='Pages' breadCrumbActive='Wallet' />
      wallet is working
    </Fragment>
  )
}

export default Wallet
