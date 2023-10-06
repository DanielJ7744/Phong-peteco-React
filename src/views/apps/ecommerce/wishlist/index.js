// ** React Imports
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WishlistRender from '../wishlist/wishlist'
import RenderWishlistList from '../wishlist/wishlistList'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getWishlistItems, deleteWishlistItem, addToCart } from '../store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const Wishlist = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)
  const userStore = useSelector(state => state.auth)

  // ** ComponentDidMount : get wishlist items
  useEffect(() => {
    dispatch(getWishlistItems())
  }, [])

  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    if (val === false) {
      dispatch(addToCart(id))
    }
    dispatch(getWishlistItems())
  }

  // ** Renders wishlist products
  return (
    <Fragment>
     <WishlistRender
          dispatch={dispatch}
          products={store.wishlist}
          getWishlistItems={getWishlistItems}
          // addToWishlist={addToWishlist}
          deleteWishlistItem={deleteWishlistItem}/>
          <RenderWishlistList />
    </Fragment>
  )
}

export default Wishlist
