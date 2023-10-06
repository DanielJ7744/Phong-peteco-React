import { Fragment, useState, useEffect } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteItemFromWishlist, getWishlistListItem, addToCart } from "../store/actions"
import Rating from "react-rating"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  CardText,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import {
  Heart,
  Star,
  X,
  ShoppingCart,
  Unlock,
  AlertCircle
} from "react-feather"
import "@styles/base/pages/app-ecommerce.scss"
import "./wishlists.scss"

function RenderWishlistListItems() {
  const history = useHistory()
  const [userType, setUserType] = useState(null)

  const [basicModal, setBasicModal] = useState(false)
  const [active, setActive] = useState("1")
  const [total, setTotal] = useState(0)

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const { wishlist_uid } = useParams()
  const dispatch = useDispatch()
  const store = useSelector((state) => state.ecommerce)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"))
    if (data === null) {
      setUserType(false)
    } else {
      setUserType(true)
    }
  }, [])

  useEffect(() => {
    dispatch(getWishlistListItem(wishlist_uid))
  }, [])

  const handleCartBtn = (product_slug, quantity) => {
    dispatch(addToCart(store.cart.uid, product_slug, quantity))
  }


  const removeWishlistItem = (wishlistUid, itemUid) => {
    dispatch(deleteItemFromWishlist(wishlistUid, itemUid))
  }

  useEffect(() => {
    dispatch(getWishlistListItem(wishlist_uid))
  }, [])

  useEffect(() => {
    if (store.wishlist.length !== 0) {
      if (
        store.wishlist.data.items.length !== 0 ||
        store.wishlist.data.items !== undefined
      ) {
        setTotal(store.wishlist.data.items.length)
      }
    }
  }, [])

  const renderWishlistListItem = () => {
    if (userType === false) {
      if (store.wishlist.length !== 0) {
        if (store.wishlist.data.items.length !== 0) {
          return store.wishlist.data.items.map((item) => {
            const isInStock = item.product.out_of_stock === "N"
            const InStock = isInStock ? "In Stock" : "Out of Stock"
            return (
              <Col sm="7" xs="10" lg="4" xl="3" md="5">
                <Card className="ecommerce-card" id="wishlistList-card">
                  <div className="item-img text-center mx-auto">
                    <Link to="/">
                      <img
                        className="img-fluid card-img-top"
                        style={{
                          width: "230px",
                          height: "220px",
                          marginTop: "12px"
                        }}
                        src={item.product.cover.original}
                        alt={item.product.cover.original}
                      />
                    </Link>
                  </div>
                  <CardBody style={{ paddingBottom: "10px" }}>
                    <div
                      className="item-wrapper"
                      style={{ textAlign: "center", marginBottom: "3px" }}
                    >
                      <div className="item-rating">
                        <ul className="unstyled-list list-inline">
                          <li>
                            <Rating
                              emptySymbol={
                                <Star size={27} fill="white" stroke="#ff9f43" />
                              }
                              fullSymbol={
                                <Star
                                  size={27}
                                  fill="#ff9f43"
                                  stroke="#ff9f43"
                                />
                              }
                              initialRating={item.product.rating}
                              readonly={true}
                            />
                          </li>
                          <li>
                            <span
                              style={{ marginLeft: "10px", color: "#7367f0" }}
                            >
                              {" "}
                              {item.product.total_reviews} Reviews
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h6 className="item-name" style={{ textAlign: "center" }}>
                      <Link className="text-body" to="/">
                        {item.product.name}
                      </Link>
                      <CardText tag="span" className="item-company"></CardText>
                    </h6>
                  </CardBody>
                  <div className="item-options text-center">
                    <div className="item-wrapper">
                      <div className="item-cost">
                        <p className="instock">{InStock}</p>
                        <h4 className="item-price" id="wishlist-item-price">
                          {item.product.price} RON
                        </h4>
                      </div>
                    </div>
                    <Button
                      style={{ width: "50%", color: "#5e5873" }}
                      className="btn-wishlist"
                      id="wishlistItems-remove-btn"
                      color="light"
                      onClick={() => removeWishlistItem(item.wishlist_uid, item.uid)}
                    >
                      <X size={14} className="mr-25" />

                      <span>Remove</span>
                    </Button>
                    <Button
                      id="wishlistItems-cart-btn"
                      style={{ width: "50%" }}
                      color="primary"
                      className="btn-cart move-cart"
                      onClick={() => handleCartBtn(item.product.slug, 1)}
                    >
                      <ShoppingCart className="mr-50" size={14} />
                      <span>Move to Cart</span>
                    </Button>
                  </div>
                </Card>
              </Col>
            )
          })
        } else {
          return (
            <Fragment>
            <Col xs='12'>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '12.8px',  backgroundColor: 'rgb(233 233 233)', borderRadius: '6px' }}>
               <Heart className="wishlist-view-icon1" fill={'#ea5455'} color= {'#ea5455'} size={20} style={{ marginRight: '10px' }} />
              <p style={{ color: '#7367f0' }}>My favorite items will be added here.</p>
            </div>
            </Col>
            <Col xs='12'>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button.Ripple onClick={() => history.push('/store')} color='primary'>View Products</Button.Ripple>
              </div>
            </Col>
            </Fragment>
          )
        }
      }
    }
  }

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="11">
          <Card className="card-transaction">
            <CardHeader>
              <div className="wishlist-title-div">
                <Heart className="wishlist-view-icon1" size={30} style={{}} />
                <span className="wishlists-heading">Wishlist</span>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <Nav id="wishlistLinks" tabs justified>
                    <NavItem>
                      <NavLink
                        style={{
                          backgroundColor:
                            active !== "1" ? "#f8f8f8" : "transparent"
                        }}
                        id="wishlist-text-link"
                        className="mys"
                        active={active === "1"}
                        onClick={() => {
                          toggle("1")
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start"
                          }}
                        >
                         <Unlock
                              size={33}
                              color="#28c76f"
                              style={{ marginRight: "10px" }}
                            />
                          <div>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Star size={17} color='#6e6b7b' />
                          Default
                         </div>
                            <p id="wishlist-total-items">
                              Total items: {total} products
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <TabContent className="py-50" activeTab={active}>
                    <TabPane tabId={active}>
                      <Row>{renderWishlistListItem()}</Row>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
        <ModalBody style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem"
            }}
          >
            <AlertCircle color="#ff9f43" size={55} />
            <h3>Are you sure?</h3>
            <p>You will lose all items added to wishlist.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="danger"
              outline
              onClick={() => setBasicModal(!basicModal)}
              style={{ marginRight: "20px" }}
            >
              Cancel
            </Button>

            <Button color="primary" onClick={() => setBasicModal(!basicModal)}>
              Yes, remove it!
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default RenderWishlistListItems
