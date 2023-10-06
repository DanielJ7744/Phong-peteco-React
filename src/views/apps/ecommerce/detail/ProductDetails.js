import { Fragment, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Button } from "reactstrap"
import { Heart, Star, ShoppingCart, Share2 } from "react-feather"
import NumberInput from "@components/number-input"
import Rating from "react-rating"
import classnames from "classnames"
import { useSelector } from "react-redux"
import "./productDetails.scss"

const Product = (props) => {
  const {
    data,
    dispatch,
    addToCart,
    addItemsToWishlistList,
    deleteItemsFromWishlistList
  } = props
  const store = useSelector((state) => state.ecommerce)

  const [productQuantity, setProductQuantity] = useState(1)

  const [userType, setUserType] = useState(null)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [deleteItemId, setDeleteItemId] = useState()
  const productUid = data.data.uid

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"))
    if (data === null) {
      setUserType(false)
    } else {
      setUserType(true)
    }
  }, [])

  useEffect(() => {
    setIsInWishlist(false)
    if (userType === true) {
      if (store.wishlist.length !== 0) {
        store.wishlist.data.map((list) => {
           list.items.map((p) => {
            if (p.product_uid === data.data.uid) {
              setIsInWishlist(true)
              setDeleteItemId(p.uid)
            } 
          })
        })
      }
     }
     if (userType === false) {
      if (store.wishlist.length !== 0) {
        if (
          store.wishlist.data.items.length !== 0 ||
          store.wishlist.data.items !== undefined
        ) {
          store.wishlist.data.items.map((list) => {
            if (list.product_uid === data.data.uid) {
              setIsInWishlist(true)
              setDeleteItemId(list.uid)
            }
          })
        }
      }
    }
  })

  const handleCartBtn = (product_slug, quantity) => {
    dispatch(addToCart(store.cart.uid, product_slug, quantity))
  }


  const isInStock = data.data.out_of_stock === "N"
  const InStock = isInStock ? "In Stock" : "Out of Stock"
 // const soldBy = data.data.supplier.name

  console.log("data:", productUid)


  const handleWishlistClick = (product_uid) => {
    if (userType === true) {
      if (isInWishlist) {
        if (store.wishlist.length !== 0) {
          if (
            store.wishlist.data.length !== 0 ||
            store.wishlist.data !== undefined
          ) {
            dispatch(
              deleteItemsFromWishlistList(
                store.wishlist.data[0].uid,
                deleteItemId
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
      if (isInWishlist) {
        if (store.wishlist.length !== 0) {
          if (
            store.wishlist.data.items.length !== 0 ||
            store.wishlist.data.items !== undefined
          ) {
            dispatch(
              deleteItemsFromWishlistList(
                store.wishlist.data.uid,
                deleteItemId
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

  const CartBtnTag = data.data.isInCart ? Link : "button"
  return (
    <Fragment>
      <Row className="justify-content-start" style={{ paddingTop: "12px" }}>
        <Col xs="12">
          <h1 style={{ color: "#5e5873" }} className="product-card-heading">
            {data.data.name}
          </h1>
        </Col>
        <Col xs="12">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end"
            }}
          >
            <Rating
              emptySymbol={<Star size={20} fill="white" stroke="#ff9f43" />}
              fullSymbol={<Star size={20} fill="#ff9f43" stroke="#ff9f43" />}
              initialRating={data.data.rating}
              readonly={true}
            />
            <span
              style={{
                marginLeft: "10px",
                marginTop: "5px",
                color: "#7367f0",
                fontWeight: "lighter"
              }}
            >
              {data.data.total_reviews} Reviews{" "}
            </span>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "23px",
          paddingBottom: "35px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <Col lg="4" xl="4" md="3" sm="12" xs="12">
          <div className="card-img">
            <img
              className="product-img"
              src={data.data.cover.original}
              alt={data.data.name}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Col>

        <Col lg="4" xl="4" md="5" sm="12" xs="12">
          <div
            className="card-info"
            id="main-div-for-info"
            style={{ marginLeft: "50px" }}
          >
            <p className="mb-0 w-c-heading" id="some-desc">
              {data.data.description}
            </p>
            <span className="readmore" style={{ marginBottom: "14px" }}>
              {" "}
              ... Read More
            </span>
            <p className="card-info-property">
            Brand: <span> Brand Name </span>
            </p>
            <p className="card-info-property">
              Sold by: <span> happy animal </span>
            </p>
            <p className="card-info-property">
              Product code: <span> {productUid} </span>
            </p>

            <Button
              className="btn-cart"
              color="light"
              style={{
                marginTop: "20px"
              }}
            >
              <Share2 size={20} style={{ marginRight: "10px" }} />
              <span className="text-truncate">Share with friends</span>
            </Button>
          </div>
        </Col>

        <Col lg="4" xl="4" md="3" sm="12" xs="12">
          <div className="item-options text-center card-qtn">
            <div className="item-wrapper">
              <div className="item-cost">
                <p className="instock">{InStock}</p>

                <h4 className="item-price first-item-price ">
                  {" "}
                  {data.data.price} RON{" "}
                </h4>
                <div
                  className="item-quantity"
                  style={{ marginTop: "16px", marginLeft: "17px" }}
                >
                  <NumberInput
                    min={1}
                    max={10}
                    size="sm"
                    onChange={(e) => setProductQuantity(e)}
                    style={{ width: "7rem", height: "2.15rem" }}
                  />
                </div>
              </div>
            </div>
            <Button
              className="btn-cart"
              color="primary"
              style={{
                marginTop: "26px",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "44px",
                paddingRight: "44px"
              }}
              onClick={() => handleCartBtn(data.data.slug, productQuantity)}
            >
              <ShoppingCart size={20} style={{ marginRight: "10px" }} />
              <span className="text-truncate">Add to Cart</span>
            </Button>

            <Button
                className="btn-wishlist"
                color="light"
                onClick={() => handleWishlistClick(data.data.uid)}
                id="wishlist-btn"

             >
                <Heart
                  className={classnames("mr-50", {
                    "text-danger": isInWishlist === true
                  })}
                  size={14}
                />
                <span>Add to Wishlist</span>
              </Button>
          </div>
        </Col>
      </Row>
      <hr />
      <Row
        className="justify-content-start"
        style={{ marginTop: "35px", marginBottom: "10px" }}
      >
        <Col xs="12">
          <h1 className="product-card-heading">Description</h1>
        </Col>
      </Row>

      <Row className="justify-content-start">
        <Col xs="12">
          <p className="des-para"> {data.data.description}</p>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Product
