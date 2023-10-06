import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"
import { Star, ShoppingCart, Heart } from "react-feather"
import { Card, CardBody, CardText, Button, Badge } from "reactstrap"

const ProductCards = (props) => {
  // ** Props
  const {
    store,
    products,
    activeView,
    addToCart,
    dispatch,
    addItemsToWishlistList,
    deleteItemsFromWishlistList
  } = props

  const [userType, setUserType] = useState(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"))
    if (data === null) {
      setUserType(false)
    } else {
      setUserType(true)
    }
  }, [])

  const handleCartBtn = (product_slug, quantity) => {
    dispatch(addToCart(store.cart.uid, product_slug, quantity))
  }

  const handleWishlistClick = (product_uid, value, deleteItemValue) => {
    if (userType === true) {
      if (value) {
        if (store.wishlist.length !== 0) {
          if (
            store.wishlist.data.length !== 0 ||
            store.wishlist.data !== undefined
          ) {
            dispatch(
              deleteItemsFromWishlistList(
                store.wishlist.data[0].uid,
                deleteItemValue
              )
            )
          }
        }
      } else {
        if (store.wishlist.length !== 0) {
          if (
            store.wishlist.data.length !== 0 ||
            store.wishlist.data !== undefined
          ) {
            dispatch(
              addItemsToWishlistList(store.wishlist.data[0].uid, product_uid)
            )
          }
        }
      }
    }

    if (userType === false) {
      if (value) {
        if (store.wishlist.length !== 0) {
          if (
            store.wishlist.data.items.length !== 0 ||
            store.wishlist.data.items !== undefined
          ) {
            dispatch(
              deleteItemsFromWishlistList(
                store.wishlist.data.uid,
                deleteItemValue
              )
            )
          }
        }
      } else {
        if (store.wishlist.length !== 0) {
          if (
            store.wishlist.data.items.length !== 0 ||
            store.wishlist.data.items !== undefined
          ) {
            dispatch(
              addItemsToWishlistList(store.wishlist.data.uid, product_uid)
            )
          }
        }
      }
    }
  }

  // ** Renders products
  const renderProducts = () => {
    if (products.length) {
      return products.map((item) => {
        const isInWishlist = {}
        const deleteItemUid = {}
        if (userType === true) {
          if (store.wishlist.length !== 0) {
            if (
              store.wishlist.data.length !== 0 ||
              store.wishlist.data !== undefined
            ) {
              store.wishlist.data.map((list) => {
                return list.items.map((p) => {
                  if (p.product_uid === item.uid) {
                    isInWishlist.value = true
                    deleteItemUid.value = p.uid
                  }
                })
              })
            }
          }
        }
        if (userType === false) {
          if (store.wishlist.length !== 0) {
            if (
              store.wishlist.data.items.length !== 0 ||
              store.wishlist.data.items !== undefined
            ) {
              store.wishlist.data.items.map((list) => {
                if (list.product_uid === item.uid) {
                  isInWishlist.value = true
                  deleteItemUid.value = list.uid
                }
              })
            }
          }
        }
        return (
          <Card className="ecommerce-card" key={item.uid}>
            <div className="item-img text-center mx-auto">
              <Link to={`/store/p/${item.slug}`}>
                <img
                  className="img-fluid card-img-top"
                  src={item.cover["medium-default"]}
                  alt={item.name}
                />
              </Link>
            </div>
            <CardBody>
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    {new Array(5).fill().map((listItem, index) => {
                      return (
                        <li key={index} className="ratings-list-item mr-25">
                          <Star
                            className={classnames({
                              "filled-star": index + 1 <= item.rating,
                              "unfilled-star": index + 1 > item.rating
                            })}
                          />
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="item-cost">
                  <h6 className="item-price">{item.price} RON</h6>
                </div>
              </div>
              <h6 className="item-name">
                <Link className="text-body" to={`/store/p/${item.slug}`}>
                  {item.name}
                </Link>
                <CardText tag="span" className="item-company">
                  By{" "}
                  <a
                    className="company-name"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.brand}
                  </a>
                </CardText>
              </h6>
              <CardText className="item-description">
                {item.description}
              </CardText>
            </CardBody>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">{item.price} RON</h4>
                  {item.hasFreeShipping ? (
                    <CardText className="shipping">
                      <Badge color="light-success">Free Shipping</Badge>
                    </CardText>
                  ) : null}
                </div>
              </div>
              <Button
                className="btn-wishlist"
                color="light"
                onClick={() => {
                  handleWishlistClick(
                    item.uid,
                    isInWishlist.value,
                    deleteItemUid.value
                  )
                }}
              >
                <Heart
                  className={classnames("mr-50", {
                    "text-danger": isInWishlist.value
                  })}
                  size={14}
                />
                <span>Wishlist</span>
              </Button>
              <Button
                color="primary"
                //  tag={CartBtnTag}
                className="btn-cart move-cart"
                onClick={() => handleCartBtn(item.slug, "1")}
                /*eslint-disable */
                {...(item.isInCart
                  ? {
                      to: "/store/cart"
                    }
                  : {})}
                /*eslint-enable */
              >
                <ShoppingCart className="mr-50" size={14} />
                <span>{item.isInCart ? "View In Cart" : "Add To Cart"}</span>
              </Button>
            </div>
          </Card>
        )
      })
    }
  }
  return (
    <div
      className={classnames({
        "grid-view": activeView === "grid",
        "list-view": activeView === "list"
      })}
    >
      {renderProducts()}
    </div>
  )
}

export default ProductCards
