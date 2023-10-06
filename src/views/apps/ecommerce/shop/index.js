// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Shop Components
import Sidebar from './Sidebar'
import Products from './Products'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  getProducts,
  getCartItems,
  addToWishlist,
  deleteWishlistItem,
  addItemsToWishlistList,
  deleteItemsFromWishlistList
} from '../store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
import { useParams } from 'react-router'

const Shop = () => {
  // ** States
  const [activeView, setActiveView] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { slug, brand, price, rating, pageNumber = 1, sortBy } = useParams()

  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)
  let category = slug
  const slugSlashIndex = slug.lastIndexOf('/')

  if (slugSlashIndex >= 0) {
    category = slug.substring(slugSlashIndex + 1)
  }
    
// ** Get products
  useEffect(() => {
    dispatch(
      getProducts({
        q: '',
        sortBy,
        per_page: 12,
        page: pageNumber,
        rating,
        price,
        brand,
        category
      })
    )

  }, [dispatch])

  useEffect(() => {
    console.log("here")
    dispatch(
      getProducts({
        q: '',
        sortBy,
        per_page: 12,
        page: pageNumber,
        rating,
        price,
        brand,
        category
      })
    )

  }, [slug, price, brand, rating, pageNumber, sortBy])


  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Shop' breadCrumbParent='Shop' breadCrumbActive={slug} />
      <Products
        store={store}
        dispatch={dispatch}
        addToCart={addToCart}
        activeView={activeView}
        getProducts={getProducts}
        sidebarOpen={sidebarOpen}
        getCartItems={getCartItems}
        setActiveView={setActiveView}
        addToWishlist={addToWishlist}
        setSidebarOpen={setSidebarOpen}
        deleteWishlistItem={deleteWishlistItem}
        addItemsToWishlistList={addItemsToWishlistList}
        deleteItemsFromWishlistList={deleteItemsFromWishlistList}
      />
      <Sidebar sidebarOpen={sidebarOpen}
       store={store}
       getProducts={getProducts}
       dispatch={dispatch}
      />
    </Fragment>
  )
}
export default Shop
