// ** React Imports
import { useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"

// ** Product detail components
import ItemFeatures from "./ItemFeatures"
import ProductDetails from "./ProductDetails"
import RelatedProducts from "./RelatedProducts"
import ProductReview from "./ProductReview"

// ** Custom Components
import BreadCrumbs from "@components/breadcrumbs"

// ** Third Party Components
import { Card, CardBody } from "reactstrap"

// ** Store & Action
import { useDispatch, useSelector } from "react-redux"
import {
  getProduct,
  deleteWishlistItem,
  addToWishlist,
  addToCart,
  getReviews,
  addReview,
  deleteCartItem,
  addItemsToWishlistList,
  deleteItemsFromWishlistList,
  getWishlistItems,
  likeReview
} from "../store/actions"

import "@styles/base/pages/app-ecommerce-details.scss"

const Details = () => {
  // ** Vars
  const params = useParams().product
  const productId = params

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.ecommerce)

  // ** ComponentDidMount : Get product
  useEffect(() => {
    dispatch(getProduct(productId))
  }, [])

  const breadCrumbActive = store.productDetail instanceof Object && store.productDetail.data instanceof Object ? store.productDetail.data.name : ""

  return (
    <Fragment>
      <BreadCrumbs
        breadCrumbTitle="Product Details"
        breadCrumbParent="eCommerce"
        breadCrumbActive={breadCrumbActive}
      />
      <div key={store.products.uid} className="app-ecommerce-details">
        {Object.keys(store.productDetail).length ? (
          <>
        <Card>
          <CardBody>
                <ProductDetails
                  dispatch={dispatch}
                  addToCart={addToCart}
                  productId={productId}
                  getProduct={getProduct}
                  data={store.productDetail}
                  addToWishlist={addToWishlist}
                  deleteWishlistItem={deleteWishlistItem}
                  getReviews={getReviews}
                  store={store}
                  deleteCartItem={deleteCartItem}
                  addItemsToWishlistList={addItemsToWishlistList}
                  deleteItemsFromWishlistList={deleteItemsFromWishlistList}
                  getWishlistItems={getWishlistItems}
                />
                <hr />
                <ProductReview
                  dispatch={dispatch}
                  getReviews={getReviews}
                  store={store}
                  data={store.productDetail}
                  addReview={addReview}
                  likeReview={likeReview}
                />
              </CardBody>
             
            </Card>
            <RelatedProducts
              dispatch={dispatch}
              productId={productId}
              relatedProduct={store.relatedProduct}
            />    
          </>
        ) : null}
      </div>
       
    
    </Fragment>
  )
}

export default Details
