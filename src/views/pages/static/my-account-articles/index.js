import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./my-account-articles.scss"

const MyAccountArticles = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='MyAccountArticles' breadCrumbParent='Pages' breadCrumbActive='MyAccountArticles' />
      my-account-articles is working
    </Fragment>
  )
}

export default MyAccountArticles
